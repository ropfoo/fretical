export const state = () => ({
  sound: true,
  activeTone: 'some Tone',
  tones: {
    defaultTones: [
      ['F4', 'C4', 'G#3', 'D#3', 'A#2', 'F2'],
      ['F#4', 'C#4', 'A3', 'E3', 'B2', 'F#2'],
      ['G4', 'D4', 'A#3', 'F3', 'C3', 'G2'],
      ['G#4', 'D#4', 'B3', 'F#3', 'C#3', 'G#2'],
      ['A4', 'E4', 'C4', 'G3', 'D3', 'A2'],
      ['A#4', 'F4', 'C#4', 'G#3', 'D#3', 'A#2'],
      ['B4', 'F#4', 'D4', 'A3', 'E3', 'B2']
    ]
  }
});

export const mutations = {
  setActiveTone(state, tone) {
    state.activeTone = tone;
  },
  toggleSound(state, toggle) {
    state.sound = toggle;
  }
};

export const getters = {
  getDefaultTones(state) {
    return state.tones.defaultTones;
  },
  getActiveTone(state) {
    return state.activeTone;
  },
  getSound(state) {
    return state.sound;
  }
};
