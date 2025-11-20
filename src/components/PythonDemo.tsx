import { useState, useEffect, useRef } from "react";
import { DemoControls, DemoParams } from "./DemoControls";
import { Button } from "./ui/button";
import { Pause, Play, RotateCcw } from "lucide-react";

// Declare Pyodide types
declare global {
  interface Window {
    loadPyodide: any;
  }
}

export function PythonDemo() {
  const [params, setParams] = useState<DemoParams>({
    decoderOn: true,
    updateSpeed: 3,
    gridSize: 80,
    timeWindow: 20,
    bitFlipRate: 0.002,
    measurementErrorRate: 0.002,
    velocity: 3,
    boundaryCondition: "periodic",
  });

  const [syndromePercent, setSyndromePercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(
    null,
  );
  const [syndromeCount, setSyndromeCount] = useState(0);
  const [correctionCount, setCorrectionCount] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pyodideRef = useRef<any>(null);
  const animationRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);

  // Keep isRunningRef in sync with isRunning state
  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  // Load Pyodide and Python code
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        // Load Pyodide script if not already loaded
        if (!(window as any).loadPyodide) {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
          script.async = true;

          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () =>
              reject(
                new Error("Failed to load Pyodide script"),
              );
            document.head.appendChild(script);
          });
        }

        // Load Pyodide from CDN
        const pyodide = await (window as any).loadPyodide({
          indexURL:
            "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
        });

        // Install numpy (required by the code)
        await pyodide.loadPackage(["numpy"]);

        // Load the Python module code
        await pyodide.runPythonAsync(`
import numpy as np
from typing import Optional
from itertools import product

class Config:
    def __init__(
        self,
        num_instances: int = 1,
        state_shape: tuple = (4, 4),
        bit_flip_rate: float = 0.02,
        measurement_error_rate: float = 0.0,
        boundary_condition: str = 'open',
        time_window: int = 5,
        max_message_value: int = 10,
        velocity: int = 3,
    ):
        self.num_instances = num_instances
        self.state_shape = state_shape
        self.bit_flip_rate = bit_flip_rate
        self.measurement_error_rate = measurement_error_rate
        self.boundary_condition = boundary_condition
        self.time_window = time_window
        self.max_message_value = max_message_value
        self.velocity = velocity
        assert velocity > 2, "Velocity must be > 2"

class Environment:
    def __init__(self, config: Config):
        self.config = config
        self.state = None
        self.reset()

    def reset(self):
        self.state = np.zeros((self.config.num_instances, *self.config.state_shape), dtype=np.int64)

    def measure(self):
        measure_error = np.random.binomial(1, self.config.measurement_error_rate, self.state.shape).astype(np.int64)
        readouts = self.state ^ measure_error
        return readouts

    def update(self, corrections: Optional[np.ndarray] = None):
        bit_flip = np.zeros_like(self.state)
        num_dims = len(self.config.state_shape)
        
        for i in range(num_dims):
            check_flip = np.random.binomial(1, self.config.bit_flip_rate, bit_flip.shape).astype(np.int64)
            if self.config.boundary_condition == 'open':
                index = [slice(None)] * (num_dims + 1)
                index[i + 1] = -1
                check_flip[tuple(index)] = 0
            bit_flip ^= check_flip ^ np.roll(check_flip, 1, axis=i+1)
        
        self.state ^= bit_flip
        
        if corrections is not None:
            self.state ^= corrections

    def step(self, corrections: Optional[np.ndarray] = None):
        self.update(corrections)
        readouts = self.measure()
        return readouts

class Decoder:
    def __init__(self, config: Config):
        self.config = config
        self.syndromes = None
        self.last_readouts = None
        self.messages = None
        self.actions = None
        self.reset()

    def reset(self):
        self.syndromes = np.zeros((self.config.num_instances, self.config.time_window, *self.config.state_shape), dtype=np.int64)
        self.last_readouts = np.zeros((self.config.num_instances, *self.config.state_shape), dtype=np.int64)
        num_dims = len(self.config.state_shape)
        self.messages = np.full((self.config.num_instances, 2*(num_dims+1), self.config.time_window, *self.config.state_shape), 
                               self.config.max_message_value, 
                               dtype=np.int64)

    def update_syndrome(self, readouts: Optional[np.ndarray] = None):
        self.syndromes[:, -1, ...] ^= self.syndromes[:, -2, ...].copy()
        self.syndromes[:, 1:-1, ...] = self.syndromes[:, :-2, ...].copy()
        if readouts is not None:
            self.syndromes[:, 0, ...] = readouts ^ self.last_readouts
            self.last_readouts = readouts.copy()
        else:
            self.syndromes[:, 0, ...] = 0

        self.messages[:, :, 1:-1, ...] = self.messages[:, :, :-2, ...].copy()
        self.messages[:, :, 0, ...] = self.config.max_message_value

    def source_messages(self):
        max_msg_val = self.config.max_message_value
        defect_messages = np.full(self.syndromes.shape, max_msg_val, dtype=np.int64)
        defect_messages[self.syndromes == 1] = 0
        defect_messages = np.expand_dims(defect_messages, 1)
        self.messages = np.minimum(self.messages, defect_messages)

    def propagate_messages(self):
        max_msg_val = self.config.max_message_value
        updated_messages = np.full(self.messages.shape, max_msg_val, dtype=np.int64)

        spatial_dims = self.config.state_shape
        num_spatial_dims = len(spatial_dims)
        num_dims = num_spatial_dims + 1
        num_directions = 2 * num_dims
        
        boundary_condition = self.config.boundary_condition
        
        for dir_idx in range(num_directions):
            dim = dir_idx // 2
            shift_sign = 1 - 2 * (dir_idx % 2)
            
            dir_messages = self.messages[:, dir_idx, :, ...]
            dim_idx = -num_dims + dim
            forward = np.roll(dir_messages, shift_sign, axis=dim_idx)
            if boundary_condition == 'open':
                idx_list = [slice(None)] * (num_dims + 1)
                idx_list[dim_idx] = 0 if shift_sign == 1 else -1
                forward[tuple(idx_list)] = max_msg_val
            forward = np.clip(forward + 1, 0, max_msg_val)
            updated_messages[:, dir_idx, :, ...] = np.minimum(updated_messages[:, dir_idx, :, ...], forward)

            for perp_dim in range(num_dims):
                if perp_dim == dim:
                    continue
                perp_idx = -num_dims + perp_dim
                for s in (1, -1):
                    side = np.roll(forward, s, axis=perp_idx)
                    if boundary_condition == 'open':
                        idx_list = [slice(None)] * (num_dims + 1)
                        idx_list[perp_idx] = 0 if s == 1 else -1
                        side[tuple(idx_list)] = max_msg_val
                    side = np.clip(side + 1, 0, max_msg_val)
                    updated_messages[:, dir_idx, :, ...] = np.minimum(updated_messages[:, dir_idx, :, ...], side)
        
        self.messages = updated_messages

    def infer_actions(self):
        defect_mask = (self.syndromes == 1)
        if not defect_mask.any():
            self.actions = None
            return

        num_instances = self.config.num_instances
        time_window = self.config.time_window
        spatial_dims = self.config.state_shape
        num_spatial_dims = len(spatial_dims)
        num_dims = num_spatial_dims + 1
        num_directions = 2 * num_dims

        positions = time_window
        for dim in spatial_dims:
            positions *= dim

        msgs_flat = self.messages.reshape(num_instances, num_directions, -1)
        min_vals = msgs_flat.min(axis=1, keepdims=True)
        min_mask = (msgs_flat == min_vals)
        allowed_mask = min_mask.copy()

        for dim in range(num_dims):
            plus_idx = 2 * dim
            minus_idx = plus_idx + 1
            both_present = min_mask[:, plus_idx, :] & min_mask[:, minus_idx, :]
            if both_present.any():
                allowed_mask[:, plus_idx, :] &= ~both_present
                allowed_mask[:, minus_idx, :] &= ~both_present

        probs = allowed_mask.transpose(0, 2, 1).astype(np.float32)
        row_sums = probs.sum(axis=2)
        defect_mask_flat = defect_mask.reshape(num_instances, -1)
        has_options = (row_sums > 0) & defect_mask_flat

        selected = np.full((num_instances, probs.shape[1]), -1, dtype=np.int64)

        if has_options.any():
            for i in range(num_instances):
                for j in range(probs.shape[1]):
                    if has_options[i, j]:
                        p = probs[i, j]
                        p = p / p.sum()
                        selected[i, j] = np.random.choice(num_directions, p=p)

        actions = selected.reshape(num_instances, time_window, *spatial_dims)
        actions[~defect_mask] = -1
        self.actions = actions

    def get_corrections(self):
        if self.actions is None:
            return None
        
        spatial_dims = self.config.state_shape
        num_spatial_dims = len(spatial_dims)
        num_dims = num_spatial_dims + 1
        boundary_condition = self.config.boundary_condition
        
        defect_mask = (self.actions >= 0)
        if not defect_mask.any():
            return None
        
        source_pos = np.argwhere(defect_mask)
        num_defects = source_pos.shape[0]
        
        dir_idx = self.actions[defect_mask]
        dims = dir_idx // 2
        signs = dir_idx % 2
        offsets = -1 + 2 * signs
        
        target_pos = source_pos.copy()
        for dim in range(num_dims):
            dim_mask = (dims == dim)
            if dim_mask.any():
                target_pos[dim_mask, -num_dims + dim] += offsets[dim_mask]
        
        if boundary_condition == 'periodic':
            for dim in range(num_spatial_dims):
                dim_idx = -num_spatial_dims + dim
                target_pos[:, dim_idx] = target_pos[:, dim_idx] % spatial_dims[dim]
        
        time_window = self.config.time_window
        valid_time = (target_pos[:, 1] >= 0) & (target_pos[:, 1] < time_window)
        valid_spatial = np.ones(num_defects, dtype=bool)
        for dim in range(num_spatial_dims):
            dim_idx = -num_spatial_dims + dim
            valid_spatial &= (target_pos[:, dim_idx] >= 0) & (target_pos[:, dim_idx] < spatial_dims[dim])
        
        valid_pairs = valid_time & valid_spatial
        if valid_pairs.any():
            source_pos = source_pos[valid_pairs]
            target_pos = target_pos[valid_pairs]
        
        bit_pos = source_pos + target_pos
        uniq, inv = np.unique(bit_pos, axis=0, return_inverse=True)
        idx = np.arange(inv.size)
        last_idx = np.zeros(len(uniq), dtype=np.int64)
        np.maximum.at(last_idx, inv, idx)
        source_pos = source_pos[last_idx]
        target_pos = target_pos[last_idx]
        
        corrections = np.zeros(self.syndromes.shape, dtype=np.int64)
        active_pos = np.concatenate([source_pos, target_pos], axis=0)
        
        for pos in active_pos:
            corrections[tuple(pos)] ^= 1
        
        return corrections

    def flatten_corrections(self, corrections: np.ndarray):
        spatial_dims = self.config.state_shape
        num_spatial_dims = len(spatial_dims)
        return corrections.sum(axis=-num_spatial_dims-1) % 2

    def step(self, readouts: Optional[np.ndarray] = None):
        self.update_syndrome(readouts)
        
        for _ in range(self.config.velocity):
            self.source_messages()
            self.propagate_messages()
        
        self.infer_actions()
        corrections = self.get_corrections()
        if corrections is not None:
            self.syndromes ^= corrections
            corrections = self.flatten_corrections(corrections)
            self.last_readouts ^= corrections
            return corrections
        else:
            return None

# Global variables for the simulation
env = None
dec = None
corrections = None
config = None

def init_simulation(grid_size, time_window, bit_flip_rate, measurement_error_rate, velocity, boundary_condition):
    global env, dec, corrections, config
    config = Config(
        num_instances=1,
        state_shape=(grid_size, grid_size),
        time_window=time_window,
        bit_flip_rate=bit_flip_rate,
        measurement_error_rate=measurement_error_rate,
        velocity=velocity,
        boundary_condition=boundary_condition
    )
    env = Environment(config)
    dec = Decoder(config)
    env.reset()
    dec.reset()
    corrections = None
    return True

def step_simulation(decoder_on):
    global env, dec, corrections
    if decoder_on:
        readouts = env.step(corrections)
        corrections = dec.step(readouts)
    else:
        readouts = env.step()
        dec.update_syndrome(readouts)
        corrections = None
    
    state_np = env.state[0] if env.state.ndim > 2 else env.state
    corrections_np = corrections[0] if corrections is not None and corrections.ndim > 2 else (corrections if corrections is not None else np.zeros_like(state_np))
    
    syndrome_count = np.count_nonzero(state_np)
    correction_count = np.count_nonzero(corrections_np) if corrections_np is not None else 0
    # Count only corrections that are on syndromes (correct corrections)
    correct_correction_count = 0
    if corrections_np is not None:
        correct_correction_count = np.count_nonzero(np.logical_and(state_np, corrections_np))
    total = state_np.size
    syndrome_percent = 100 * syndrome_count / total if total > 0 else 0
    
    return {
        'state': state_np.tolist(),
        'corrections': corrections_np.tolist() if corrections_np is not None else [[0] * state_np.shape[1]] * state_np.shape[0],
        'syndrome_percent': syndrome_percent,
        'syndrome_count': int(syndrome_count),
        'correction_count': int(correct_correction_count)
    }
`);

        pyodideRef.current = pyodide;

        // Initialize the simulation with default parameters
        await pyodide.runPythonAsync(`
init_simulation(${params.gridSize}, ${params.timeWindow}, ${params.bitFlipRate}, ${params.measurementErrorRate}, ${params.velocity}, '${params.boundaryCondition}')
`);

        setIsLoading(false);
      } catch (error: any) {
        console.error("Failed to load Pyodide:", error);
        setLoadError(
          error.message || "Failed to load Python environment",
        );
        setIsLoading(false);
      }
    };

    loadPyodide();
  }, []);

  // Reset simulation when parameters change
  useEffect(() => {
    if (!pyodideRef.current || isLoading) return;

    const resetSimulation = async () => {
      try {
        await pyodideRef.current.runPythonAsync(`
init_simulation(${params.gridSize}, ${params.timeWindow}, ${params.bitFlipRate}, ${params.measurementErrorRate}, ${params.velocity}, '${params.boundaryCondition}')
`);
      } catch (error) {
        console.error("Failed to reset simulation:", error);
      }
    };

    resetSimulation();
  }, [
    params.gridSize,
    params.timeWindow,
    params.bitFlipRate,
    params.measurementErrorRate,
    params.velocity,
    params.boundaryCondition,
    isLoading,
  ]);

  // Animation loop
  useEffect(() => {
    if (!isRunning || !pyodideRef.current || isLoading) return;

    const animate = async (timestamp: number) => {
      // Check if we should still be running
      if (!isRunningRef.current) {
        return;
      }

      const elapsed = timestamp - lastUpdateRef.current;
      const interval = 1000 / params.updateSpeed;

      if (elapsed >= interval) {
        lastUpdateRef.current = timestamp;

        try {
          // Run one step of the simulation
          const result = await pyodideRef.current
            .runPythonAsync(`
step_simulation(${params.decoderOn ? "True" : "False"})
`);

          const data = result.toJs({
            dict_converter: Object.fromEntries,
          });

          // Update state
          setSyndromePercent(data.syndrome_percent);
          setSyndromeCount(data.syndrome_count);
          setCorrectionCount(data.correction_count);

          // Draw to canvas
          drawVisualization(data.state, data.corrections);
        } catch (error) {
          console.error("Simulation step failed:", error);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    isRunning,
    params.updateSpeed,
    params.decoderOn,
    isLoading,
  ]);

  const drawVisualization = (
    state: number[][],
    corrections: number[][],
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const h = state.length;
    const w = state[0].length;

    // Clear canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellSize = Math.min(
      canvas.width / w,
      canvas.height / h,
    );
    const offsetX = (canvas.width - cellSize * w) / 2;
    const offsetY = (canvas.height - cellSize * h) / 2;

    // Draw grid
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        const x = offsetX + j * cellSize;
        const y = offsetY + i * cellSize;

        const hasSyndrome = state[i][j] > 0;
        const hasCorrection = corrections[i][j] > 0;

        if (hasCorrection && hasSyndrome) {
          // Green - correction on syndrome (accurate)
          ctx.fillStyle = "rgba(0, 153, 38, 0.7)";
          ctx.fillRect(x, y, cellSize, cellSize);
        } else if (hasCorrection) {
          // Yellow - correction on no syndrome (misdiagnosis)
          ctx.fillStyle = "rgba(255, 204, 0, 0.7)";
          ctx.fillRect(x, y, cellSize, cellSize);
        } else if (hasSyndrome) {
          // Orange-red - syndrome
          ctx.fillStyle = "rgba(201, 51, 0, 1)";
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
  };

  const handleReset = async () => {
    setIsRunning(false);
    if (pyodideRef.current && !isLoading) {
      try {
        await pyodideRef.current.runPythonAsync(`
init_simulation(${params.gridSize}, ${params.timeWindow}, ${params.bitFlipRate}, ${params.measurementErrorRate}, ${params.velocity}, '${params.boundaryCondition}')
`);
        setSyndromePercent(0);
        setSyndromeCount(0);
        setCorrectionCount(0);

        // Clear the canvas
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      } catch (error) {
        console.error("Failed to reset:", error);
      }
    }
  };

  if (loadError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center p-8 bg-red-50 rounded-lg border-2 border-red-200">
          <h3 className="text-xl text-red-800 mb-2">
            Failed to Load Python Environment
          </h3>
          <p className="text-red-600">{loadError}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center p-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#F4A135] border-t-transparent mb-4"></div>
          <h3 className="text-xl text-[#553128]">
            Loading Python Environment...
          </h3>
          <p className="text-[#553128]/70 mt-2">
            This may take a moment on first load
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-[#F4A135]/20 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Visualization Area - Takes up 3 columns */}
        <div className="lg:col-span-3 p-6 space-y-4">
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 pb-4 border-b border-[#F4A135]/10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border border-gray-300" style={{ backgroundColor: "rgba(201, 51, 0, 1)" }}></div>
              <span className="text-xs text-[#553128]/70">
                Syndrome
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-gray-300"
                style={{
                  backgroundColor: "rgba(255, 204, 0, 0.7)",
                }}
              ></div>
              <span className="text-xs text-[#553128]/70">
                Correction (misdiagnosis)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-gray-300"
                style={{
                  backgroundColor: "rgba(0, 153, 38, 0.7)",
                }}
              ></div>
              <span className="text-xs text-[#553128]/70">
                Correction (accurate)
              </span>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl aspect-square flex items-center justify-center bg-gray-50 rounded-lg border border-[#F4A135]/10">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="max-w-full max-h-full"
              />
            </div>
          </div>

          {/* Control Buttons & Stats - Side by side */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F4A135]/10">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className="bg-[#EB612E] hover:bg-[#EB612E]/90 text-white"
              >
                {isRunning ? (
                  <>
                    <Pause className="mr-2 w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 w-4 h-4" />
                    Start
                  </>
                )}
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-[#F4A135] text-[#553128] hover:bg-[#FFF9D0]"
              >
                <RotateCcw className="mr-2 w-4 h-4" />
                Reset
              </Button>
            </div>

            <div className="text-center px-6 py-2 bg-gradient-to-r from-[#FFF9D0]/30 to-transparent rounded-lg">
              <div className="text-2xl text-[#EB612E]">
                {syndromePercent.toFixed(2)}%
              </div>
              <p className="text-xs text-[#553128]/60">
                Syndrome Density
              </p>
            </div>
          </div>
        </div>

        {/* Controls Panel - Takes up 1 column */}
        <div className="lg:col-span-1 bg-gray-50 border-l border-[#F4A135]/10 p-6">
          <DemoControls
            params={params}
            onParamsChange={setParams}
            syndromeCount={syndromeCount}
            correctionCount={correctionCount}
          />
        </div>
      </div>
    </div>
  );
}