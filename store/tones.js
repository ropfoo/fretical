export const state = {
  activeTone: 'some Tone',
  tones: {
    defaultTones: [
      ['F', 'C', 'G#', 'D#', 'A#', 'F'],
      ['F#', 'C#', 'A', 'E', 'B', 'F#'],
      ['G', 'D', 'A#', 'F', 'C', 'G'],
      ['G#', 'D#', 'B', 'F#', 'C#', 'G#'],
      ['A', 'E', 'C', 'G', 'D', 'A']
    ]
  }
};

export const mutations = {
  setActiveTone(state, tone) {
    state.activeTone = tone;
  }
};

export const getters = {
  getDefaultTones(state) {
    return state.tones.defaultTones;
  },
  getActiveTone(state) {
    return state.activeTone;
  }
};
