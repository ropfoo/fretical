export const state = () => ({
  playMode: false,
  filterMenu: false,
  showAllTones: false
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
  }
};
