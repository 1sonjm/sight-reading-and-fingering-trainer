type ClefCode = 'G' | 'F' | 'C'
interface ClefType{
  code: string
  i18n: string
  image: string
}
const ClefSet = {
  G: {
    code: 'G',
    i18n: 'clef.g',
    image: 'clef_g.svg',
  },
  F: {
    code: 'F',
    i18n: 'clef.f',
    image: 'clef_f.svg',
  },
  C: {
    code: 'C',
    i18n: 'clef.c',
    image: 'clef_alto.svg',
  },
}

type NoteCode = '4' | '2' | '1' | '1_2' | '1_4' | '1_8' | '1_16' | '1_32' | '1_64'
interface NoteType{
  i18n: string
  image: string
}
const NoteSet = {
  '4': {
    code: '4',
    i18n: 'note.4',
    image: 'note_4.svg',
  },
  '2': {
    code: '2',
    i18n: 'note.2',
    image: 'note_2.svg',
  },
  '1': {
    code: '1',
    i18n: 'note.1',
    image: 'note_1.svg',
  },
  '1_2': {
    code: '1_2',
    i18n: 'note.1_2',
    image: 'note_1.2.svg',
  },
  '1_4': {
    code: '1_4',
    i18n: 'note.1_4',
    image: 'note_1.4.svg',
  },
  '1_8': {
    code: '1_8',
    i18n: 'note.1_8',
    image: 'note_1.8.svg',
  },
  '1_16': {
    code: '1_16',
    i18n: 'note.1_16',
    image: 'note_1.16.svg',
  },
  '1_32': {
    code: '1_32',
    i18n: 'note.1_32',
    image: 'note_1.32.svg',
  },
  '1_64': {
    code: '1_64',
    i18n: 'note.1_64',
    image: 'note_1.64.svg',
  },
}

type RestCode = '4' | '2' | '1' | '1_2' | '1_4' | '1_8' | '1_16' | '1_32' | '1_64'
interface RestType{
  i18n: string
  image: string
}
const RestSet = {
  '4': {
    code: '4',
    i18n: 'rest.4',
    image: 'rest_4.svg',
  },
  '2': {
    code: '2',
    i18n: 'rest.2',
    image: 'rest_2.svg',
  },
  '1': {
    code: '1',
    i18n: 'rest.1',
    image: 'rest_1.svg',
  },
  '1_2': {
    code: '1_2',
    i18n: 'rest.1_2',
    image: 'rest_1.2.svg',
  },
  '1_4': {
    code: '1_4',
    i18n: 'rest.1_4',
    image: 'rest_1.4.svg',
  },
  '1_8': {
    code: '1_8',
    i18n: 'rest.1_8',
    image: 'rest_1.8.svg',
  },
  '1_16': {
    code: '1_16',
    i18n: 'rest.1_16',
    image: 'rest_1.16.svg',
  },
  '1_32': {
    code: '1_32',
    i18n: 'rest.1_32',
    image: 'rest_1.32.svg',
  },
  '1_64': {
    code: '1_64',
    i18n: 'rest.1_64',
    image: 'rest_1.64.svg',
  },
}

type PitchCode = 'G' | 'F' | 'C'
interface PitchType{
  code: string
  i18n: string
  position: number
}
const PitchSet = {
  A: {
    code: 'A',
    i18n: 'pitch.A',
    position: 1
  },
  B: {
    code: 'B',
    i18n: 'pitch.B',
    position: 2
  },
  C: {
    code: 'C',
    i18n: 'pitch.C',
    position: 3
  },
  D: {
    code: 'D',
    i18n: 'pitch.D',
    position: 4
  },
  E: {
    code: 'E',
    i18n: 'pitch.E',
    position: 5
  },
  F: {
    code: 'F',
    i18n: 'pitch.F',
    position: 6
  },
  G: {
    code: 'G',
    i18n: 'pitch.G',
    position: 7
  },
}

export {
  ClefCode, ClefType, ClefSet,
  NoteCode, NoteType, NoteSet,
  RestCode, RestType, RestSet,
  PitchCode, PitchType, PitchSet,
}