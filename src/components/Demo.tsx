import { useState, useEffect, useRef } from 'react';
import { DemoControls, DemoParams } from './DemoControls';
import { DemoVisualization } from './DemoVisualization';
import { Config } from './demo/Config';
import { Environment } from './demo/Environment';
import { Decoder } from './demo/Decoder';
import { Button } from './ui/button';
import { Pause, Play, RotateCcw } from 'lucide-react';

export function Demo() {
  const [params, setParams] = useState<DemoParams>({
    decoderOn: true,
    updateSpeed: 3,
    gridSize: 80,
    timeWindow: 20,
    bitFlipRate: 0.002,
    measurementErrorRate: 0.0,
    velocity: 3,
    boundaryCondition: 'periodic'
  });

  const [state, setState] = useState<number[]>([]);
  const [corrections, setCorrections] = useState<number[]>([]);
  const [syndromePercent, setSyndromePercent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [syndromeCount, setSyndromeCount] = useState(0);
  const [correctionCount, setCorrectionCount] = useState(0);
  
  const envRef = useRef<Environment | null>(null);
  const decRef = useRef<Decoder | null>(null);
  const correctionsRef = useRef<number[] | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  // Initialize environment and decoder
  const initializeSimulation = () => {
    const config = new Config({
      numInstances: 1,
      stateShape: [params.gridSize, params.gridSize],
      bitFlipRate: params.bitFlipRate,
      measurementErrorRate: params.measurementErrorRate,
      boundaryCondition: params.boundaryCondition,
      timeWindow: params.timeWindow,
      maxMessageValue: 10,
      velocity: params.velocity
    });

    envRef.current = new Environment(config);
    decRef.current = new Decoder(config);
    
    envRef.current.reset();
    decRef.current.reset();
    
    // Reset corrections ref to null, matching Python's initial state
    correctionsRef.current = null;
    
    setState([...envRef.current.state]);
    setCorrections(new Array(params.gridSize * params.gridSize).fill(0));
  };

  // Reset when parameters change
  useEffect(() => {
    initializeSimulation();
  }, [
    params.gridSize,
    params.timeWindow,
    params.bitFlipRate,
    params.measurementErrorRate,
    params.velocity,
    params.boundaryCondition
  ]);

  // Animation loop
  useEffect(() => {
    if (!isRunning) return;

    const animate = (timestamp: number) => {
      if (!envRef.current || !decRef.current) return;

      const elapsed = timestamp - lastUpdateRef.current;
      const interval = 1000 / params.updateSpeed;

      if (elapsed >= interval) {
        lastUpdateRef.current = timestamp;

        let newCorr: number[] | null = null;

        if (params.decoderOn) {
          // Decoder on: pass corrections from previous iteration to env.step
          // This matches: readouts = env.step(corrections)
          const readouts = envRef.current.step(correctionsRef.current || undefined);
          // Get new corrections from decoder
          // This matches: corrections = dec.step(readouts)
          newCorr = decRef.current.step(readouts);
          correctionsRef.current = newCorr;
          
          // Update display corrections
          if (newCorr) {
            setCorrections([...newCorr]);
          } else {
            setCorrections(new Array(params.gridSize * params.gridSize).fill(0));
          }
        } else {
          // Decoder off: no corrections applied
          const readouts = envRef.current.step();
          decRef.current.updateSyndrome(readouts);
          correctionsRef.current = null;
          setCorrections(new Array(params.gridSize * params.gridSize).fill(0));
        }

        setState([...envRef.current.state]);

        // Calculate syndrome percentage
        const sCount = envRef.current.state.filter(v => v > 0).length;
        const total = envRef.current.state.length;
        setSyndromePercent((sCount / total) * 100);
        setSyndromeCount(sCount);
        setCorrectionCount(newCorr ? newCorr.filter(v => v > 0).length : 0);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, params.updateSpeed, params.decoderOn, params.gridSize]);

  const handleReset = () => {
    setIsRunning(false);
    initializeSimulation();
    setSyndromePercent(0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Visualization Area */}
      <div className="lg:col-span-2 space-y-4">
        <div className="aspect-square w-full max-w-3xl mx-auto">
          <DemoVisualization
            state={state}
            corrections={corrections}
            gridSize={[params.gridSize, params.gridSize]}
          />
        </div>
        
        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className="bg-[#EB612E] hover:bg-[#EB612E]/90 text-white"
            size="lg"
          >
            {isRunning ? (
              <>
                <Pause className="mr-2 w-5 h-5" />
                Pause
              </>
            ) : (
              <>
                <Play className="mr-2 w-5 h-5" />
                Start
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-[#F4A135] text-[#553128] hover:bg-[#FFF9D0]"
            size="lg"
          >
            <RotateCcw className="mr-2 w-5 h-5" />
            Reset
          </Button>
        </div>

        {/* Stats */}
        <div className="text-center p-6 bg-gradient-to-br from-[#FFF9D0]/50 to-white rounded-lg border-2 border-[#F4A135]/20">
          <div className="text-4xl text-[#EB612E] mb-2">
            {syndromePercent.toFixed(2)}%
          </div>
          <p className="text-[#553128]/70">Syndrome Density</p>
        </div>
      </div>

      {/* Controls Panel */}
      <div className="lg:col-span-1">
        <DemoControls 
          params={params} 
          onParamsChange={setParams}
          syndromeCount={syndromeCount}
          correctionCount={correctionCount}
        />
      </div>
    </div>
  );
}