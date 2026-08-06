import { defineStore } from 'pinia';
import { DEFAULT_TONES } from '../data/defaultTones';
import type { ActiveTone, AskedTone } from '../types/app';

export const useTonesStore = defineStore('tones', {
  state: () => ({
    sound: false,
    activeTone: { name: '-', string: 0 } as ActiveTone,
    askedTone: { name: 'test', string: 0 } as AskedTone
  }),
  actions: {
    setActiveTone(tone: ActiveTone) {
      this.activeTone = tone;
    },
    toggleSound(toggle: boolean) {
      this.sound = toggle;
    },
    determineAskedTone([firstFret, lastFret]: [number, number]) {
      const determinedTones = DEFAULT_TONES.slice(firstFret, lastFret);
      const randomFret = Math.floor(Math.random() * determinedTones.length);
      const fretTones = determinedTones[randomFret];

      if (!fretTones) {
        return;
      }

      const randomTone = Math.floor(Math.random() * fretTones.length);
      const tone = fretTones[randomTone];

      if (tone) {
        this.askedTone = tone;
      }
    }
  }
});
