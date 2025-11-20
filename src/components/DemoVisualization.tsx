import { useEffect, useRef } from 'react';

interface VisualizationProps {
  state: number[];
  corrections: number[];
  gridSize: [number, number];
}

export function DemoVisualization({ state, corrections, gridSize }: VisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [h, w] = gridSize;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellSize = Math.min(canvas.width / w, canvas.height / h);
    const offsetX = (canvas.width - cellSize * w) / 2;
    const offsetY = (canvas.height - cellSize * h) / 2;

    // Draw grid
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        const idx = i * w + j;
        const x = offsetX + j * cellSize;
        const y = offsetY + i * cellSize;

        const hasSyndrome = state[idx] > 0;
        const hasCorrection = corrections[idx] > 0;

        if (hasCorrection && hasSyndrome) {
          // Purple - correction on syndrome
          ctx.fillStyle = 'rgba(128, 0, 255, 0.7)';
          ctx.fillRect(x, y, cellSize, cellSize);
        } else if (hasCorrection) {
          // Light blue - correction on no syndrome
          ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
          ctx.fillRect(x, y, cellSize, cellSize);
        } else if (hasSyndrome) {
          // Red - syndrome
          ctx.fillStyle = 'red';
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
  }, [state, corrections, h, w]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white rounded-lg border-2 border-[#F4A135]/20">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="max-w-full max-h-full"
      />
    </div>
  );
}
