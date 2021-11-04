type ClefCode = 'G' | 'F' | 'C'
interface ClefType{
  code: string
  i18n: string
  image: string
}

const Clef = {
  G: {
    i18n: 'clef.g',
    image: 'g-clef.svg',
  },
  F: {
    i18n: 'clef.f',
    image: 'f-clef.svg',
  },
  C: {
    i18n: 'clef.c',
    image: 'alto-clef.svg',
  },
}

export { Clef, ClefCode, ClefType }