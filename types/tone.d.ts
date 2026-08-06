declare module 'tone' {
  export class Synth {
    toDestination?: () => this;
    toMaster: () => this;
    triggerAttackRelease(note: string, duration: string): void;
  }
}
