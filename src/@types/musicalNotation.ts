type ClefCode = 'treble' | 'alto' | 'bass'
interface ClefType{
  code: string
  baseOctave: number
  i18n: string
  image: string
}
const ClefSet = {
  treble: {
    code: 'treble',
    baseOctave: 4,
    i18n: 'musicalNotation.clef.treble',
    image: 'clef_g.svg',
  },
  alto: {
    code: 'alto',
    baseOctave: 3,
    i18n: 'musicalNotation.clef.alto',
    image: 'clef_alto.svg',
  },
  bass: {
    code: 'bass',
    baseOctave: 2,
    i18n: 'musicalNotation.clef.bass',
    image: 'clef_f.svg',
  },
}

type NoteCode = '4' | '2' | '1' | '1_2' | '1_4' | '1_8' | '1_16' | '1_32' | '1_64'
interface NoteType{
  code: string
  i18n: string
  image: string
}
const NoteSet = {
  '4': {
    code: '4',
    i18n: 'musicalNotation.note.4',
    image: 'note_4.svg',
  },
  '2': {
    code: '2',
    i18n: 'musicalNotation.note.2',
    image: 'note_2.svg',
  },
  '1': {
    code: '1',
    i18n: 'musicalNotation.note.1',
    image: 'note_1.svg',
  },
  '1_2': {
    code: '1_2',
    i18n: 'musicalNotation.note.1_2',
    image: 'note_1.2.svg',
  },
  '1_4': {
    code: '1_4',
    i18n: 'musicalNotation.note.1_4',
    image: 'note_1.4.svg',
  },
  '1_8': {
    code: '1_8',
    i18n: 'musicalNotation.note.1_8',
    image: 'note_1.8.svg',
  },
  '1_16': {
    code: '1_16',
    i18n: 'musicalNotation.note.1_16',
    image: 'note_1.16.svg',
  },
  '1_32': {
    code: '1_32',
    i18n: 'musicalNotation.note.1_32',
    image: 'note_1.32.svg',
  },
  '1_64': {
    code: '1_64',
    i18n: 'musicalNotation.note.1_64',
    image: 'note_1.64.svg',
  },
}

type RestCode = '4' | '2' | '1' | '1_2' | '1_4' | '1_8' | '1_16' | '1_32' | '1_64'
interface RestType{
  code: string
  i18n: string
  image: string
}
const RestSet = {
  '4': {
    code: '4',
    i18n: 'musicalNotation.rest.4',
    image: 'rest_4.svg',
  },
  '2': {
    code: '2',
    i18n: 'musicalNotation.rest.2',
    image: 'rest_2.svg',
  },
  '1': {
    code: '1',
    i18n: 'musicalNotation.rest.1',
    image: 'rest_1.svg',
  },
  '1_2': {
    code: '1_2',
    i18n: 'musicalNotation.rest.1_2',
    image: 'rest_1.2.svg',
  },
  '1_4': {
    code: '1_4',
    i18n: 'musicalNotation.rest.1_4',
    image: 'rest_1.4.svg',
  },
  '1_8': {
    code: '1_8',
    i18n: 'musicalNotation.rest.1_8',
    image: 'rest_1.8.svg',
  },
  '1_16': {
    code: '1_16',
    i18n: 'musicalNotation.rest.1_16',
    image: 'rest_1.16.svg',
  },
  '1_32': {
    code: '1_32',
    i18n: 'musicalNotation.rest.1_32',
    image: 'rest_1.32.svg',
  },
  '1_64': {
    code: '1_64',
    i18n: 'musicalNotation.rest.1_64',
    image: 'rest_1.64.svg',
  },
}

type PitchCode = 'G' | 'F' | 'C'
interface PitchType{
  code: string
  i18n: string
  position: number
  frequency: number
}
const PitchSet = {
  C: {
    code: 'C',
    i18n: 'musicalNotation.pitch.C',
    position: 1,
    frequency: 261.6
  },
  D: {
    code: 'D',
    i18n: 'musicalNotation.pitch.D',
    position: 2,
    frequency: 293.7
  },
  E: {
    code: 'E',
    i18n: 'musicalNotation.pitch.E',
    position: 3,
    frequency: 329.6
  },
  F: {
    code: 'F',
    i18n: 'musicalNotation.pitch.F',
    position: 4,
    frequency: 349.2
  },
  G: {
    code: 'G',
    i18n: 'musicalNotation.pitch.G',
    position: 5,
    frequency: 392.0
  },
  A: {
    code: 'A',
    i18n: 'musicalNotation.pitch.A',
    position: 6,
    frequency: 440.00
  },
  B: {
    code: 'B',
    i18n: 'musicalNotation.pitch.B',
    position: 7,
    frequency: 493.88
  },
}

type EntryType = 'note' | 'rest'
interface Entry{
  type: EntryType
}
interface NoteEntry extends Entry{
  length: NoteType
  pitch: PitchType
  octave: number
  keySignature?: '#' | 'b'
}
interface RestEntry extends Entry{
  length: RestType
}

export {
  ClefCode, ClefType, ClefSet,
  NoteCode, NoteType, NoteSet,
  RestCode, RestType, RestSet,
  PitchCode, PitchType, PitchSet,
  NoteEntry, RestEntry,
}