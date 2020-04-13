export const state = () => ({
  firstFret: 2,
  lastFret: 6
});

export const mutations = {
  setFirstFret(state, fretNumber) {
    state.firstFret = fretNumber;
  },
  setLastFret(state, fretNumber) {
    state.lastFret = fretNumber;
  }
};

export const getters = {
  getFirstFret(state) {
    return state.firstFret;
  },
  getLastFret(state) {
    return state.lastFret;
  }
};
