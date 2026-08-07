export type GuitarString = 1 | 2 | 3 | 4 | 5 | 6;

export type FretStep = -1 | 1;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Difficulty = 'easy' | 'normal' | 'hard';

export type DifficultyIndex = 0 | 1 | 2;

export type PitchClass = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type NaturalNoteName = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type SharpNoteName = 'A#' | 'C#' | 'D#' | 'F#' | 'G#';

export type FlatNoteName = 'Bb' | 'Db' | 'Eb' | 'Gb' | 'Ab';

export type CanonicalNoteName = NaturalNoteName | SharpNoteName;

export type NoteDisplayName =
  NaturalNoteName | `${SharpNoteName} / ${FlatNoteName}`;

export type ToneSoundName = `${CanonicalNoteName}${number}`;

export interface Tone {
  canonicalName: CanonicalNoteName;
  displayName: NoteDisplayName;
  enharmonicName?: FlatNoteName;
  octave: number;
  pitchClass: PitchClass;
  soundName: ToneSoundName;
  string: GuitarString;
}

export interface SelectedTone extends Tone {
  fret: number;
}

export type ActiveTone = SelectedTone | null;

export type AskedTone = Tone | null;

export type FretTones = readonly [Tone, Tone, Tone, Tone, Tone, Tone];
