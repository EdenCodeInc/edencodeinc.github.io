import { Config } from './Config';
import { zeros, bernoulli, xorArrays, getIndex } from './utils';

export class Environment {
  config: Config;
  state: number[];
  shape: number[];

  constructor(config: Config) {
    this.config = config;
    this.shape = [config.numInstances, ...config.stateShape];
    this.state = zeros(this.shape);
  }

  reset(): void {
    this.state = zeros(this.shape);
  }

  measure(): number[] {
    // Apply measurement error
    const measureError = bernoulli(this.config.measurementErrorRate, this.state.length);
    return xorArrays(this.state, measureError);
  }

  update(corrections?: number[]): void {
    const [h, w] = this.config.stateShape;
    const numDims = 2; // Only spatial dimensions for bit flip
    const bitFlip = zeros(this.shape);

    // Generate bit flip errors for each spatial dimension
    // This creates edge-based errors between adjacent qubits
    for (let dim = 0; dim < numDims; dim++) {
      const checkFlip = bernoulli(this.config.bitFlipRate, this.state.length);
      
      // Handle open boundary condition - set boundary edges to 0
      if (this.config.boundaryCondition === 'open') {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            if ((dim === 0 && i === h - 1) || (dim === 1 && j === w - 1)) {
              const idx = getIndex(this.shape, [0, i, j]);
              checkFlip[idx] = 0;
            }
          }
        }
      }

      // Roll checkFlip by 1 in the current dimension
      // bit_flip ^= check_flip ^ check_flip.roll(1, dims=-num_dims + dim)
      const rolled: number[] = new Array(this.state.length);
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          const idx = getIndex(this.shape, [0, i, j]);
          let srcI = i, srcJ = j;
          
          if (dim === 0) {
            // Roll in i dimension (vertical)
            srcI = (i + 1) % h;
          } else {
            // Roll in j dimension (horizontal)  
            srcJ = (j + 1) % w;
          }
          
          const srcIdx = getIndex(this.shape, [0, srcI, srcJ]);
          rolled[idx] = checkFlip[srcIdx];
        }
      }

      // XOR: bit_flip ^= check_flip ^ rolled
      for (let i = 0; i < bitFlip.length; i++) {
        bitFlip[i] ^= checkFlip[i] ^ rolled[i];
      }
    }

    // Apply bit flips to state
    this.state = xorArrays(this.state, bitFlip);

    // Apply corrections if provided
    if (corrections) {
      this.state = xorArrays(this.state, corrections);
    }
  }

  step(corrections?: number[]): number[] {
    this.update(corrections);
    return this.measure();
  }
}
