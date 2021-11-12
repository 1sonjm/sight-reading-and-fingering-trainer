export const sampleSet = {
  saxophone: 'saxophone',
  piano: 'piano',
}
class SampleCode{
  [index: string]: string
  'C1': string | ''
  'C#1': string | ''
  'D1': string | ''
  'D#1': string | ''
  'E1': string | ''
  'F1': string | ''
  'F#1': string | ''
  'G1': string | ''
  'G#1': string | ''
  'C2': string | ''
  'C#2': string | ''
  'D2': string | ''
  'D#2': string | ''
  'E2': string | ''
  'F2': string | ''
  'F#2': string | ''
  'G2': string | ''
  'G#2': string | ''
  'C3': string | ''
  'C#3': string | ''
  'D3': string | ''
  'D#3': string | ''
  'E3': string | ''
  'F3': string | ''
  'F#3': string | ''
  'G3': string | ''
  'G#3': string | ''
  'C4': string | ''
  'C#4': string | ''
  'D4': string | ''
  'D#4': string | ''
  'E4': string | ''
  'F4': string | ''
  'F#4': string | ''
  'G4': string | ''
  'G#4': string | ''
}
export class soundSamples {
  samples: Array<string>
  sampleTypes: string
  sampleMap: SampleCode
  constructor(sampleTypes: string) {
    this.samples = ['C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4']
    this.sampleTypes  =  '@/assets/samples/'+ sampleTypes;
    this.sampleMap = new SampleCode()
    Object.keys(this.sampleMap).forEach((key)=>{
      this.sampleMap[key] = `${this.sampleTypes}/${key.replace("#", "s")}.mp3`
    })
  }
  getPath(key: string): string {
    return this.sampleMap[key]
  }
}