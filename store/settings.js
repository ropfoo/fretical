export const state = () => ({
  firstFretInput: 0,
  lastFretInput: 12,
  rounds: 5,
  difficulties: ['easy', 'normal', 'hard'],
  selectedDifficulty: 1
});

export const mutations = {
  setFirstFretInput(state, input) {
    state.firstFretInput += input;
  },
  setLastFretInput(state, input) {
    state.lastFretInput += input;
  },
  setRounds(state, input) {
    state.rounds += input;
  },
  setDifficulty(state, input) {
    state.selectedDifficulty += input;
  }
};

export const getters = {
  getFirstFretInput(state) {
    return state.firstFretInput;
  },
  getLastFretInput(state) {
    return state.lastFretInput;
  },
  getRounds(state) {
    return state.rounds;
  },
  getDifficulty(state) {
    return state.difficulties[state.selectedDifficulty];
  },
  getSelectedDifficulty(state) {
    return state.selectedDifficulty;
  }
};
