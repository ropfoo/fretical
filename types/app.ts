export type GuitarString = 1 | 2 | 3 | 4 | 5 | 6;

export type FretStep = -1 | 1;

export type Direction = 'up' | 'down' | 'left' | 'right';

export type Difficulty = 'easy' | 'normal' | 'hard';

export type DifficultyIndex = 0 | 1 | 2;

export interface Tone {
  name: string;
  string: GuitarString;
}

export interface EmptyTone {
  name: '-';
  string: 0;
}

export interface InitialAskedTone {
  name: 'test';
  string: 0;
}

export type ActiveTone = Tone | EmptyTone;

export type AskedTone = Tone | InitialAskedTone;

export type FretTones = readonly [Tone, Tone, Tone, Tone, Tone, Tone];
