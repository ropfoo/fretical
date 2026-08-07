import type {
  CanonicalNoteName,
  FlatNoteName,
  NoteDisplayName,
  PitchClass
} from '../types/app';

interface NoteDefinition {
  canonicalName: CanonicalNoteName;
  displayName: NoteDisplayName;
  enharmonicName?: FlatNoteName;
  pitchClass: PitchClass;
}

export const CHROMATIC_NOTES = [
  { pitchClass: 0, canonicalName: 'C', displayName: 'C' },
  {
    pitchClass: 1,
    canonicalName: 'C#',
    enharmonicName: 'Db',
    displayName: 'C# / Db'
  },
  { pitchClass: 2, canonicalName: 'D', displayName: 'D' },
  {
    pitchClass: 3,
    canonicalName: 'D#',
    enharmonicName: 'Eb',
    displayName: 'D# / Eb'
  },
  { pitchClass: 4, canonicalName: 'E', displayName: 'E' },
  { pitchClass: 5, canonicalName: 'F', displayName: 'F' },
  {
    pitchClass: 6,
    canonicalName: 'F#',
    enharmonicName: 'Gb',
    displayName: 'F# / Gb'
  },
  { pitchClass: 7, canonicalName: 'G', displayName: 'G' },
  {
    pitchClass: 8,
    canonicalName: 'G#',
    enharmonicName: 'Ab',
    displayName: 'G# / Ab'
  },
  { pitchClass: 9, canonicalName: 'A', displayName: 'A' },
  {
    pitchClass: 10,
    canonicalName: 'A#',
    enharmonicName: 'Bb',
    displayName: 'A# / Bb'
  },
  { pitchClass: 11, canonicalName: 'B', displayName: 'B' }
] as const satisfies readonly NoteDefinition[];

export function getNoteDefinition(pitchClass: PitchClass): NoteDefinition {
  const note = CHROMATIC_NOTES[pitchClass];

  if (!note) {
    throw new Error(`Unknown pitch class: ${pitchClass}`);
  }

  return note;
}

export function normalizePitchClass(value: number): PitchClass {
  return (((value % 12) + 12) % 12) as PitchClass;
}
