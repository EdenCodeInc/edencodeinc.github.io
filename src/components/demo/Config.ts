export class Config {
  numInstances: number;
  stateShape: [number, number];
  bitFlipRate: number;
  measurementErrorRate: number;
  boundaryCondition: 'open' | 'periodic';
  timeWindow: number;
  maxMessageValue: number;
  velocity: number;

  constructor(options: {
    numInstances?: number;
    stateShape?: [number, number];
    bitFlipRate?: number;
    measurementErrorRate?: number;
    boundaryCondition?: 'open' | 'periodic';
    timeWindow?: number;
    maxMessageValue?: number;
    velocity?: number;
  } = {}) {
    this.numInstances = options.numInstances ?? 1;
    this.stateShape = options.stateShape ?? [80, 80];
    this.bitFlipRate = options.bitFlipRate ?? 0.002;
    this.measurementErrorRate = options.measurementErrorRate ?? 0.0;
    this.boundaryCondition = options.boundaryCondition ?? 'periodic';
    this.timeWindow = options.timeWindow ?? 20;
    this.maxMessageValue = options.maxMessageValue ?? 10;
    this.velocity = options.velocity ?? 3;

    if (this.velocity <= 2) {
      throw new Error("Velocity must be > 2");
    }
  }
}
