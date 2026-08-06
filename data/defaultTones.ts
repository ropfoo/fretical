import type { FretTones } from '../types/app';

const BASE_TONES = [
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
] satisfies readonly FretTones[];

export const DEFAULT_TONES = [
  ...BASE_TONES,
  ...BASE_TONES.slice(1).map(incrementFretTonesOctave)
] satisfies readonly FretTones[];

function incrementOctave(tone: FretTones[number]): FretTones[number] {
  return {
    ...tone,
    name: tone.name.replace(/\d+$/, (octave) => String(Number(octave) + 1))
  };
}

function incrementFretTonesOctave([
  first,
  second,
  third,
  fourth,
  fifth,
  sixth
]: FretTones): FretTones {
  return [
    incrementOctave(first),
    incrementOctave(second),
    incrementOctave(third),
    incrementOctave(fourth),
    incrementOctave(fifth),
    incrementOctave(sixth)
  ];
}
