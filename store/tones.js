export const state = () => ({
  sound: false,
  shownTones: [],
  activeTone: 'tap a string',
  prevTone: '',
  tones: {
    defaultTones: [
      ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
      ['F4', 'C4', 'G#3', 'D#3', 'A#2', 'F2'],
      ['F#4', 'C#4', 'A3', 'E3', 'B2', 'F#2'],
      ['G4', 'D4', 'A#3', 'F3', 'C3', 'G2'],
      ['G#4', 'D#4', 'B3', 'F#3', 'C#3', 'G#2'],
      ['A4', 'E4', 'C4', 'G3', 'D3', 'A2'],
      ['A#4', 'F4', 'C#4', 'G#3', 'D#3', 'A#2'],
      ['B4', 'F#4', 'D4', 'A3', 'E3', 'B2'],
      ['C5', 'G4', 'D#4', 'A#3', 'F3', 'C3'],
      ['C#5', 'G#4', 'E4', 'B3', 'F#3', 'C#3'],
      ['D5', 'A4', 'F4', 'C4', 'G3', 'D3'],
      ['D#5', 'A#4', 'F#4', 'C#4', 'G#3', 'D#3'],
      ['E5', 'B4', 'G4', 'D4', 'A3', 'E3']
    ]
  }
});

export const mutations = {
  setActiveTone(state, tone) {
    state.activeTone = tone;
  },
  addToShownTones(state, tone) {
    state.shownTones.push(tone);
  },
  toggleSound(state, toggle) {
    state.sound = toggle;
  },
  reverseDefaultTones(state, tonesArray) {
    tonesArray.forEach(tones => {
      state.tones.defaultTones[tones] = tones.reverse();
    });
  }
};

export const getters = {
  getDefaultTones(state) {
    return state.tones.defaultTones;
  },
  getActiveTone(state) {
    return state.activeTone;
  },
  getShownTones(state) {
    return state.shownTones;
  },
  getSound(state) {
    return state.sound;
  }
};
