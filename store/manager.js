export const state = () => ({
  playMode: false,
  filterMenu: false,
  showAllTones: false,
  paused: false,
  toneTriggered: false,
  score: 0
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
  setPaused(state, status) {
    state.paused = status;
  },
  setToneTriggered(state, status) {
    state.toneTriggered = status;
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
