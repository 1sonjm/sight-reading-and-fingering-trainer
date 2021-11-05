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

type NoteCode = '1' | '1/2' | '1/4' | '1/8' | '1/16' | '1/32'
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
  '1/2': {
    code: '1/2',
    i18n: 'note.1/2',
    image: 'note_1.2.svg',
  },
  '1/4': {
    code: '1/4',
    i18n: 'note.1/4',
    image: 'note_1.4.svg',
  },
  '1/8': {
    code: '1/8',
    i18n: 'note.1/8',
    image: 'note_1.8.svg',
  },
  '1/16': {
    code: '1/16',
    i18n: 'note.1/16',
    image: 'note_1.16.svg',
  },
  '1/32': {
    code: '1/32',
    i18n: 'note.1/32',
    image: 'note_1.32.svg',
  },
  '1/64': {
    code: '1/64',
    i18n: 'note.1/64',
    image: 'note_1.64.svg',
  },
}

type RestCode = '4' | '2' | '1' | '1/2' | '1/4' | '1/8' | '1/16' | '1/32' | '1/64'
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
  '1/2': {
    code: '1/2',
    i18n: 'rest.1/2',
    image: 'rest_1.2.svg',
  },
  '1/4': {
    code: '1/4',
    i18n: 'rest.1/4',
    image: 'rest_1.4.svg',
  },
  '1/8': {
    code: '1/8',
    i18n: 'rest.1/8',
    image: 'rest_1.8.svg',
  },
  '1/16': {
    code: '1/16',
    i18n: 'rest.1/16',
    image: 'rest_1.16.svg',
  },
  '1/32': {
    code: '1/32',
    i18n: 'rest.1/32',
    image: 'rest_1.32.svg',
  },
  '1/64': {
    code: '1/64',
    i18n: 'rest.1/64',
    image: 'rest_1.64.svg',
  },
}

export {
  ClefCode, ClefType, ClefSet,
  NoteCode, NoteType, NoteSet,
  RestCode, RestType, RestSet,
}