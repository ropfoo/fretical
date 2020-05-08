export const state = () => ({
  filterMenu: false,
  showAllTones: true
});

export const mutations = {
  toggleFilterMenu(state, status) {
    state.filterMenu = status;
  },
  toggleShowAllTones(state, status) {
    state.showAllTones = status;
  }
};

export const getters = {
  getFilterMenu(state) {
    return state.filterMenu;
  },
  getShowAllTones(state) {
    return state.showAllTones;
  }
};
