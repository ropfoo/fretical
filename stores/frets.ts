import { defineStore } from 'pinia';
import { MAX_FRET, MIN_FRET } from '../data/defaultTones';

export { MAX_FRET, MIN_FRET };

function clampFret(value: number): number {
  if (!Number.isFinite(value)) {
    return MIN_FRET;
  }

  return Math.min(Math.max(Math.trunc(value), MIN_FRET), MAX_FRET);
}

export const useFretsStore = defineStore('frets', {
  state: () => ({
    firstFret: MIN_FRET,
    lastFret: 12
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
