// Utility functions for array operations similar to PyTorch

export function zeros(shape: number[]): number[] {
  const size = shape.reduce((a, b) => a * b, 1);
  return new Array(size).fill(0);
}

export function zerosLike(arr: number[], shape: number[]): number[] {
  return zeros(shape);
}

export function full(shape: number[], value: number): number[] {
  const size = shape.reduce((a, b) => a * b, 1);
  return new Array(size).fill(value);
}

export function bernoulli(rate: number, size: number): number[] {
  return new Array(size).fill(0).map(() => Math.random() < rate ? 1 : 0);
}

export function roll(arr: number[], shape: number[], shifts: number, dim: number): number[] {
  const result = [...arr];
  const numDims = shape.length;
  
  if (numDims === 3) {
    const [d0, d1, d2] = shape;
    for (let i = 0; i < d0; i++) {
      for (let j = 0; j < d1; j++) {
        for (let k = 0; k < d2; k++) {
          const idx = i * d1 * d2 + j * d2 + k;
          let newIdx = idx;
          
          if (dim === 0) {
            const newI = (i + shifts + d0) % d0;
            newIdx = newI * d1 * d2 + j * d2 + k;
          } else if (dim === 1) {
            const newJ = (j + shifts + d1) % d1;
            newIdx = i * d1 * d2 + newJ * d2 + k;
          } else if (dim === 2) {
            const newK = (k + shifts + d2) % d2;
            newIdx = i * d1 * d2 + j * d2 + newK;
          }
          
          result[idx] = arr[newIdx];
        }
      }
    }
  }
  
  return result;
}

export function getIndex(shape: number[], indices: number[]): number {
  let index = 0;
  let stride = 1;
  for (let i = shape.length - 1; i >= 0; i--) {
    index += indices[i] * stride;
    stride *= shape[i];
  }
  return index;
}

export function getIndices(shape: number[], index: number): number[] {
  const indices: number[] = [];
  let remaining = index;
  for (let i = shape.length - 1; i >= 0; i--) {
    indices.unshift(remaining % shape[i]);
    remaining = Math.floor(remaining / shape[i]);
  }
  return indices;
}

export function xorArrays(a: number[], b: number[]): number[] {
  return a.map((val, idx) => val ^ b[idx]);
}

export function clamp(arr: number[], max: number): number[] {
  return arr.map(val => Math.min(val, max));
}

export function minimum(a: number[], b: number[]): number[] {
  return a.map((val, idx) => Math.min(val, b[idx]));
}
