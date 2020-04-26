export const state = () => ({
  firstFret: 1,
  lastFret: 7
});

export const mutations = {
  setFirstFret(state, amount) {
    if (Math.sign(amount) === -1 && state.firstFret === 1) {
      state.firstFret = 1;
    } else {
      state.firstFret += amount;
    }
  },
  setLastFret(state, amount) {
    state.lastFret += amount;
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
