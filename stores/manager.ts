import { defineStore } from 'pinia';

export const useManagerStore = defineStore('manager', {
  state: () => ({
    playMode: false,
    showAllTones: false,
    paused: true,
    toneTriggered: false,
    score: 0
  }),
  actions: {
    toggleShowAllTones(status: boolean) {
      this.showAllTones = status;
    },
    setPlayMode(status: boolean) {
      this.playMode = status;
    },
    setScore(points: number) {
      this.score += points;
    },
    resetScore() {
      this.score = 0;
    },
    setPaused(status: boolean) {
      this.paused = status;
    },
    setToneTriggered(status: boolean) {
      this.toneTriggered = status;
    }
  }
});
