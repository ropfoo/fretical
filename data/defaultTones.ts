import { getNoteDefinition, normalizePitchClass } from './notes';
import type { FretTones, GuitarString, PitchClass, Tone } from '../types/app';

export const MIN_FRET = 0;
export const MAX_FRET = 24;

interface OpenString {
  midi: number;
  string: GuitarString;
}

const STANDARD_TUNING = [
  { string: 1, midi: getMidiNote(4, 4) },
  { string: 2, midi: getMidiNote(11, 3) },
  { string: 3, midi: getMidiNote(7, 3) },
  { string: 4, midi: getMidiNote(2, 3) },
  { string: 5, midi: getMidiNote(9, 2) },
  { string: 6, midi: getMidiNote(4, 2) }
] as const satisfies readonly [
  OpenString,
  OpenString,
  OpenString,
  OpenString,
  OpenString,
  OpenString
];

export const DEFAULT_TONES = Array.from(
  { length: MAX_FRET - MIN_FRET + 1 },
  (_, fret) => createFretTones(fret)
) satisfies readonly FretTones[];

function createFretTones(fret: number): FretTones {
  return [
    createTone(STANDARD_TUNING[0], fret),
    createTone(STANDARD_TUNING[1], fret),
    createTone(STANDARD_TUNING[2], fret),
    createTone(STANDARD_TUNING[3], fret),
    createTone(STANDARD_TUNING[4], fret),
    createTone(STANDARD_TUNING[5], fret)
  ];
}

function createTone(openString: OpenString, fret: number): Tone {
  const midi = openString.midi + fret;
  const pitchClass = normalizePitchClass(midi);
  const octave = getOctave(midi);
  const note = getNoteDefinition(pitchClass);

  return {
    ...note,
    octave,
    soundName: `${note.canonicalName}${octave}`,
    string: openString.string
  };
}

function getMidiNote(pitchClass: PitchClass, octave: number): number {
  return (octave + 1) * 12 + pitchClass;
}

function getOctave(midi: number): number {
  return Math.floor(midi / 12) - 1;
}
