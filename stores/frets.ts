import { defineStore } from 'pinia';

export const MIN_FRET = 0;
export const MAX_FRET = 12;

function clampFret(value: number): number {
  if (!Number.isFinite(value)) {
    return MIN_FRET;
  }

  return Math.min(Math.max(Math.trunc(value), MIN_FRET), MAX_FRET);
}

export const useFretsStore = defineStore('frets', {
  state: () => ({
    firstFret: MIN_FRET,
    lastFret: MAX_FRET
  }),
  actions: {
    setFirstFretValue(fret: number) {
      this.firstFret = Math.min(clampFret(fret), this.lastFret);
    },
    setLastFretValue(fret: number) {
      this.lastFret = Math.max(clampFret(fret), this.firstFret);
    }
  }
});
