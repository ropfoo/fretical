import { defineStore } from 'pinia';
import { DEFAULT_TONES } from '../data/defaultTones';
import type { ActiveTone, AskedTone, SelectedTone } from '../types/app';

export const useTonesStore = defineStore('tones', {
  state: () => ({
    sound: false,
    activeTone: null as ActiveTone,
    askedTone: null as AskedTone
  }),
  getters: {
    activeToneLabel: (state) => state.activeTone?.displayName ?? '-',
    askedToneLabel: (state) => state.askedTone?.displayName ?? '-'
  },
  actions: {
    clearActiveTone() {
      this.activeTone = null;
    },
    setSelectedTone(tone: SelectedTone) {
      this.activeTone = tone;
    },
    toggleSound(toggle: boolean) {
      this.sound = toggle;
    },
    determineAskedTone([firstFret, lastFret]: [number, number]) {
      const determinedTones = DEFAULT_TONES.slice(firstFret, lastFret + 1);
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
