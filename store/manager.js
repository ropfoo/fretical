export const state = () => ({
  playMode: false,
  filterMenu: false,
  showAllTones: false,
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
  }
};
