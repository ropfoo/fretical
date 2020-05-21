export const state = () => ({
  playMode: false,
  filterMenu: false,
  showAllTones: false,
  paused: true,
  toneTriggered: false,
  score: 0,
  totalScore: 0
});

export const mutations = {
  toggleFilterMenu(state, status) {
    state.filterMenu = status;
  },
  toggleShowAllTones(state, status) {
    state.showAllTones = status;
  },
  setPlayMode(state, status) {
    state.playMode = status;
  },
  setScore(state, points) {
    state.score += points;
  },
  resetScore(state) {
    state.score = 0;
  },
  setPaused(state, status) {
    state.paused = status;
  },
  setToneTriggered(state, status) {
    state.toneTriggered = status;
  },
  setTotalScore(state, score) {
    state.totalScore += score;
  }
};

export const getters = {
  getFilterMenu(state) {
    return state.filterMenu;
  },
  getShowAllTones(state) {
    return state.showAllTones;
  },
  getPlayMode(state) {
    return state.playMode;
  },
  getScore(state) {
    return state.score;
  },
  getPaused(state) {
    return state.paused;
  },
  getToneTriggered(state) {
    return state.toneTriggered;
  }
};
