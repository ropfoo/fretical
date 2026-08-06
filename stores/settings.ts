import { defineStore } from 'pinia';
import type { DifficultyIndex, FretStep } from '../types/app';

const DIFFICULTIES = ['easy', 'normal', 'hard'] as const;

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    firstFretInput: 0,
    lastFretInput: 12,
    rounds: 5,
    selectedDifficulty: 1 as DifficultyIndex
  }),
  getters: {
    difficulty: (state) => DIFFICULTIES[state.selectedDifficulty]
  },
  actions: {
    setFirstFretInput(input: FretStep) {
      this.firstFretInput += input;
    },
    setLastFretInput(input: FretStep) {
      this.lastFretInput += input;
    },
    setRounds(input: FretStep) {
      this.rounds += input;
    },
    setDifficulty(input: FretStep) {
      const nextDifficulty = this.selectedDifficulty + input;

      if (nextDifficulty >= 0 && nextDifficulty < DIFFICULTIES.length) {
        this.selectedDifficulty = nextDifficulty as DifficultyIndex;
      }
    }
  }
});
