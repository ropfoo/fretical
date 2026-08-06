import { defineStore } from 'pinia';
import type { FretStep } from '../types/app';

export const useFretsStore = defineStore('frets', {
  state: () => ({
    firstFret: 1,
    lastFret: 11
  }),
  actions: {
    setFirstFret(amount: FretStep) {
      if (Math.sign(amount) === -1 && this.firstFret === 1) {
        this.firstFret = 1;
      } else {
        this.firstFret += amount;
      }
    },
    setLastFret(amount: FretStep) {
      this.lastFret += amount;
    }
  }
});
