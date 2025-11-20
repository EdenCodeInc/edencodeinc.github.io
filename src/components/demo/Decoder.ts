import { Config } from './Config';
import { zeros, full, xorArrays, minimum, clamp, getIndex, getIndices } from './utils';

export class Decoder {
  config: Config;
  syndromes: number[];
  lastReadouts: number[];
  messages: number[];
  actions: number[] | null;
  
  syndromeShape: number[];
  messageShape: number[];

  constructor(config: Config) {
    this.config = config;
    const [h, w] = config.stateShape;
    this.syndromeShape = [config.numInstances, config.timeWindow, h, w];
    
    const numDims = 3; // time + 2 spatial
    this.messageShape = [config.numInstances, 2 * numDims, config.timeWindow, h, w];
    
    this.syndromes = zeros(this.syndromeShape);
    this.lastReadouts = zeros([config.numInstances, h, w]);
    this.messages = full(this.messageShape, config.maxMessageValue);
    this.actions = null;
  }

  reset(): void {
    this.syndromes = zeros(this.syndromeShape);
    this.lastReadouts = zeros([this.config.numInstances, ...this.config.stateShape]);
    this.messages = full(this.messageShape, this.config.maxMessageValue);
    this.actions = null;
  }

  updateSyndrome(readouts: number[] | null): void {
    const [N, T, h, w] = this.syndromeShape;
    const newSyndromes = zeros(this.syndromeShape);

    // Roll syndrome window
    for (let n = 0; n < N; n++) {
      for (let t = 0; t < T; t++) {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            const idx = getIndex(this.syndromeShape, [n, t, i, j]);
            
            if (t === T - 1) {
              // Merge last two
              const prev = getIndex(this.syndromeShape, [n, T - 2, i, j]);
              newSyndromes[idx] = this.syndromes[idx] ^ this.syndromes[prev];
            } else if (t === 0) {
              // New syndrome
              if (readouts) {
                const readIdx = getIndex([N, h, w], [n, i, j]);
                const lastIdx = getIndex([N, h, w], [n, i, j]);
                newSyndromes[idx] = readouts[readIdx] ^ this.lastReadouts[lastIdx];
              } else {
                newSyndromes[idx] = 0;
              }
            } else {
              // Shift bulk
              const prevIdx = getIndex(this.syndromeShape, [n, t - 1, i, j]);
              newSyndromes[idx] = this.syndromes[prevIdx];
            }
          }
        }
      }
    }

    this.syndromes = newSyndromes;

    // Update last readouts
    if (readouts) {
      this.lastReadouts = [...readouts];
    }

    // Roll messages
    const newMessages = full(this.messageShape, this.config.maxMessageValue);
    const numDirs = this.messageShape[1];
    
    for (let n = 0; n < N; n++) {
      for (let d = 0; d < numDirs; d++) {
        for (let t = 0; t < T; t++) {
          for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
              const idx = getIndex(this.messageShape, [n, d, t, i, j]);
              
              if (t === 0) {
                newMessages[idx] = this.config.maxMessageValue;
              } else if (t < T - 1) {
                const prevIdx = getIndex(this.messageShape, [n, d, t - 1, i, j]);
                newMessages[idx] = this.messages[prevIdx];
              }
            }
          }
        }
      }
    }
    
    this.messages = newMessages;
  }

  sourceMessages(): void {
    const [N, T, h, w] = this.syndromeShape;
    const numDirs = this.messageShape[1];

    for (let n = 0; n < N; n++) {
      for (let t = 0; t < T; t++) {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            const syndIdx = getIndex(this.syndromeShape, [n, t, i, j]);
            
            if (this.syndromes[syndIdx] === 1) {
              // Set all direction messages to 0 at defect
              for (let d = 0; d < numDirs; d++) {
                const msgIdx = getIndex(this.messageShape, [n, d, t, i, j]);
                this.messages[msgIdx] = 0;
              }
            }
          }
        }
      }
    }
  }

  propagateMessages(): void {
    const [N, numDirs, T, h, w] = this.messageShape;
    const updatedMessages = full(this.messageShape, this.config.maxMessageValue);
    const numDims = 3;

    for (let dir = 0; dir < numDirs; dir++) {
      const dim = Math.floor(dir / 2);
      const sign = (dir % 2) === 0 ? 1 : -1;

      for (let n = 0; n < N; n++) {
        for (let t = 0; t < T; t++) {
          for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
              const coords = [t, i, j];
              const newCoords = [...coords];
              newCoords[dim] += sign;

              // Handle boundaries
              let valid = true;
              if (dim === 0) { // time
                if (newCoords[0] < 0 || newCoords[0] >= T) valid = false;
              } else if (this.config.boundaryCondition === 'open') {
                if (dim === 1 && (newCoords[1] < 0 || newCoords[1] >= h)) valid = false;
                if (dim === 2 && (newCoords[2] < 0 || newCoords[2] >= w)) valid = false;
              } else {
                if (dim === 1) newCoords[1] = (newCoords[1] + h) % h;
                if (dim === 2) newCoords[2] = (newCoords[2] + w) % w;
              }

              const curIdx = getIndex(this.messageShape, [n, dir, t, i, j]);
              
              if (valid) {
                const srcIdx = getIndex(this.messageShape, [n, dir, ...newCoords]);
                const forward = Math.min(this.messages[srcIdx] + 1, this.config.maxMessageValue);
                updatedMessages[curIdx] = Math.min(updatedMessages[curIdx], forward);
              }
            }
          }
        }
      }
    }

    this.messages = updatedMessages;
  }

  inferActions(): void {
    const [N, T, h, w] = this.syndromeShape;
    const numDirs = this.messageShape[1];
    this.actions = new Array(N * T * h * w).fill(-1);

    for (let n = 0; n < N; n++) {
      for (let t = 0; t < T; t++) {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            const syndIdx = getIndex(this.syndromeShape, [n, t, i, j]);
            
            if (this.syndromes[syndIdx] === 1) {
              let minVal = this.config.maxMessageValue;
              const minDirs: number[] = [];

              for (let d = 0; d < numDirs; d++) {
                const msgIdx = getIndex(this.messageShape, [n, d, t, i, j]);
                const val = this.messages[msgIdx];
                
                if (val < minVal) {
                  minVal = val;
                  minDirs.length = 0;
                  minDirs.push(d);
                } else if (val === minVal) {
                  minDirs.push(d);
                }
              }

              if (minDirs.length > 0) {
                const chosen = minDirs[Math.floor(Math.random() * minDirs.length)];
                const actIdx = getIndex(this.syndromeShape, [n, t, i, j]);
                this.actions[actIdx] = chosen;
              }
            }
          }
        }
      }
    }
  }

  getCorrections(): number[] | null {
    if (!this.actions) return null;

    const [N, T, h, w] = this.syndromeShape;
    const corrections = zeros(this.syndromeShape);
    const pairs: Array<[number[], number[]]> = [];

    for (let n = 0; n < N; n++) {
      for (let t = 0; t < T; t++) {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            const actIdx = getIndex(this.syndromeShape, [n, t, i, j]);
            const dir = this.actions[actIdx];
            
            if (dir >= 0) {
              const dim = Math.floor(dir / 2);
              const sign = (dir % 2) === 0 ? 1 : -1;
              const offset = -sign;

              const source = [n, t, i, j];
              const target = [...source];
              target[dim + 1] += offset;

              // Validate target
              let valid = true;
              if (dim === 0) {
                if (target[1] < 0 || target[1] >= T) valid = false;
              } else if (this.config.boundaryCondition === 'periodic') {
                if (dim === 1) target[2] = (target[2] + h) % h;
                if (dim === 2) target[3] = (target[3] + w) % w;
              } else {
                if (target[2] < 0 || target[2] >= h || target[3] < 0 || target[3] >= w) {
                  valid = false;
                }
              }

              if (valid) {
                pairs.push([source, target]);
              }
            }
          }
        }
      }
    }

    // Apply corrections
    for (const [source, target] of pairs) {
      const srcIdx = getIndex(this.syndromeShape, source);
      const tgtIdx = getIndex(this.syndromeShape, target);
      corrections[srcIdx] ^= 1;
      corrections[tgtIdx] ^= 1;
    }

    return corrections;
  }

  flattenCorrections(corrections: number[]): number[] {
    const [N, T, h, w] = this.syndromeShape;
    const flattened = zeros([N, h, w]);

    for (let n = 0; n < N; n++) {
      for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
          let sum = 0;
          for (let t = 0; t < T; t++) {
            const idx = getIndex(this.syndromeShape, [n, t, i, j]);
            sum += corrections[idx];
          }
          const flatIdx = getIndex([N, h, w], [n, i, j]);
          flattened[flatIdx] = sum % 2;
        }
      }
    }

    return flattened;
  }

  step(readouts: number[] | null): number[] | null {
    this.updateSyndrome(readouts);

    for (let v = 0; v < this.config.velocity; v++) {
      this.sourceMessages();
      this.propagateMessages();
    }

    this.inferActions();
    const corrections = this.getCorrections();

    if (corrections) {
      this.syndromes = xorArrays(this.syndromes, corrections);
      const flattened = this.flattenCorrections(corrections);
      this.lastReadouts = xorArrays(this.lastReadouts, flattened);
      return flattened;
    }

    return null;
  }
}
