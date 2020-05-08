export const state = () => ({
  sound: false,
  shownTones: [],
  activeTone: 'tap a string',
  tones: {
    defaultTones: [
      [
        { name: 'E4', string: 6 },
        { name: 'B4', string: 5 },
        { name: 'G3', string: 4 },
        { name: 'D3', string: 3 },
        { name: 'A2', string: 2 },
        { name: 'E2', string: 1 }
      ],
      [
        { name: 'F4', string: 6 },
        { name: 'C4', string: 5 },
        { name: 'G#3', string: 4 },
        { name: 'D#3', string: 3 },
        { name: 'A#2', string: 2 },
        { name: 'F2', string: 1 }
      ],
      [
        { name: 'F#4', string: 6 },
        { name: 'C#4', string: 5 },
        { name: 'A3', string: 4 },
        { name: 'E3', string: 3 },
        { name: 'B2', string: 2 },
        { name: 'F#2', string: 1 }
      ],
      [
        { name: 'G4', string: 6 },
        { name: 'D4', string: 5 },
        { name: 'A#3', string: 4 },
        { name: 'F3', string: 3 },
        { name: 'C3', string: 2 },
        { name: 'G2', string: 1 }
      ],
      [
        { name: 'G#4', string: 6 },
        { name: 'D#4', string: 5 },
        { name: 'B3', string: 4 },
        { name: 'F#3', string: 3 },
        { name: 'C#3', string: 2 },
        { name: 'G#2', string: 1 }
      ],
      [
        { name: 'A4', string: 6 },
        { name: 'E4', string: 5 },
        { name: 'C4', string: 4 },
        { name: 'G3', string: 3 },
        { name: 'D3', string: 2 },
        { name: 'A2', string: 1 }
      ],
      [
        { name: 'A#4', string: 6 },
        { name: 'F4', string: 5 },
        { name: 'C#4', string: 4 },
        { name: 'G#3', string: 3 },
        { name: 'D#3', string: 2 },
        { name: 'A#2', string: 1 }
      ],
      [
        { name: 'B4', string: 6 },
        { name: 'F#4', string: 5 },
        { name: 'D4', string: 4 },
        { name: 'A3', string: 3 },
        { name: 'E3', string: 2 },
        { name: 'B2', string: 1 }
      ],
      [
        { name: 'C5', string: 6 },
        { name: 'G4', string: 5 },
        { name: 'D#4', string: 4 },
        { name: 'A#3', string: 3 },
        { name: 'F3', string: 2 },
        { name: 'C3', string: 1 }
      ],
      [
        { name: 'C#5', string: 6 },
        { name: 'G#4', string: 5 },
        { name: 'E4', string: 4 },
        { name: 'B3', string: 3 },
        { name: 'F#3', string: 2 },
        { name: 'C#3', string: 1 }
      ],
      [
        { name: 'D5', string: 6 },
        { name: 'A4', string: 5 },
        { name: 'F4', string: 4 },
        { name: 'C4', string: 3 },
        { name: 'G3', string: 2 },
        { name: 'D3', string: 1 }
      ],
      [
        { name: 'D#5', string: 6 },
        { name: 'A#4', string: 5 },
        { name: 'F#4', string: 4 },
        { name: 'C#4', string: 3 },
        { name: 'G#3', string: 2 },
        { name: 'D#3', string: 1 }
      ],
      [
        { name: 'E5', string: 6 },
        { name: 'B4', string: 5 },
        { name: 'G4', string: 4 },
        { name: 'D4', string: 3 },
        { name: 'A3', string: 2 },
        { name: 'E3', string: 1 }
      ]
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
