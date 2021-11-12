<template>
	<div id="sight">
		<div class="noteLine">
			<p class="bpm">
				<img src="@/assets/icon/musicalNotation/note_1.4.svg">
				= {{ bpm }}
			</p>
			<div
				class="noteSlide"
				:class="{
					altoClef:clef.code === ClefSet.alto.code,
					bassClef:clef.code === ClefSet.bass.code,
				}"
				:style="{transform: `translateX(-${noteTermRate * moveTimer}px)`}">
				<i
					v-for="(entry, index) in entryQueue"
					:key="index"
					:style="{transform: `translateX(${sightWdith * index}px)`}">
					<template v-if="entry.type === 'note'">
						<NoteItem :entry="entry"/>
					</template>
					<template v-else>
						<RestItem :entry="entry"/>
					</template>
				</i>
			</div>
			<div class="lineGroup">
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
			</div>
			<div
				class="clef"
				:class="clef.code">
				<img :src="require(`@/assets/icon/musicalNotation/${clef.image}`)">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {
	ClefType, ClefSet,
	NoteEntry, NoteSet,
	PitchSet, PitchType,
	RestEntry, RestSet
} from '@/@types/musicalNotation'
import {
	soundSamples,
	sampleSet,
} from '@/@types/soundSamples'
import NoteItem from '@/components/NoteItem.vue'
import RestItem from '@/components/RestItem.vue'

import {
	defineComponent, PropType, ref, Ref,
	computed, watch,
	onMounted, onUnmounted,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'
import store from '@/store'
import { Interval, Note, Scale } from '@tonaljs/tonal'
import { Sampler, Transport, Synth, PolySynth } from 'tone'

export default defineComponent({
	name: 'sight',
	components: {
		NoteItem,
		RestItem,
	},
	props: {
		isPlay: {
			type: Boolean,
			default: false,
		},
		bpm: {
			type: Number,
			default: 120,
		},
		clef: {
			type: Object as PropType<ClefType>,
			required: true,
		},
	},
	setup(props) {
		onMounted(() => ClefSet)
		const log = useLogger()
		const entryQueue = ref([
			{type: 'note',length:NoteSet['1_2'],pitch:PitchSet.A,octave:props.clef.baseOctave},
			// {type: 'rest',length:RestSet['1_4']},
			{type: 'note',length:NoteSet['1_4'],pitch:PitchSet.D,octave:props.clef.baseOctave,keySignature:'#'},
			{type: 'note',length:NoteSet['1_8'],pitch:PitchSet.B,octave:props.clef.baseOctave},
			{type: 'note',length:NoteSet['1_4'],pitch:PitchSet.F,octave:props.clef.baseOctave},
			{type: 'note',length:NoteSet['1'],pitch:PitchSet.G,octave:props.clef.baseOctave},
		// ]) as Ref<Array<NoteEntry | RestEntry>>;
		]) as Ref<Array<NoteEntry>>;
		// const wo = new Worker('@/plugins/metronome.js');
		// const workerTest = () => {
		// 	if(window.Worker){
		// 		console.log(1111)
		// 		wo.postMessage('start')
		// 		wo.postMessage({interval: 10})
		// 	}
		// }


		const music = [
			["C2", "D#2", "G2", "C3", "G2", "D#2"], // Cm (i)
			["B1", "D2", "G2", "B2", "G2", "D2"], // G (V)
			["A#1", "D2", "F2", "A#2", "F2", "D2"], // Bb (VII)
			["A1", "C2", "F2", "A2", "F2", "C2"], // F (V / VII)
			["G#1", "C2", "D#2", "G#2", "D#2", "C2"], // Ab (VI)
			["G1", "C2", "D#2", "G2", "D#2", "C2"], // Cm (i)
			["F#1", "C2", "D#2", "F#2", "D#2", "C2"], // F#dim7 (vii° / V)
			["G1", "C2", "D2", "G2", "D2", "B1"] // Gsus4 (?) -> G (V)
		];

		const currentNoteIndex = ref(0)
    const musicFlat = music.flat();
		// if (props.isPlay) {
		// 	Transport.pause();
		// } else {
		// 	Transport.start();
		// }
    // const sampleMap = new soundSamples(sampleSet.saxophone).sampleMap
    // Transport.bpm.value = 120;
    // const sampler = new Sampler(
    //   sampleMap,
    //   () => {
    //     sampler.release = 12;
    //     sampler.toDestination();

    //     Transport.scheduleRepeat(time => {
    //       sampler.triggerAttackRelease(musicFlat[currentNoteIndex.value], "8n");

    //       if (++currentNoteIndex.value > musicFlat.length - 1) {
		// 				currentNoteIndex.value = 0
		// 			}
    //     }, "8n")
    //   },
    // );
    const synth = new PolySynth(Synth, {
			envelope: {
				attack: 0.02,
				decay: 0.1,
				sustain: 0.3,
				release: 1,
			}
		}).toDestination();

    Transport.scheduleRepeat(time => {
      synth.triggerAttackRelease(musicFlat[currentNoteIndex.value], "8n");

      if (++currentNoteIndex.value > musicFlat.length - 1) {
				currentNoteIndex.value = 0
			}
    }, "8n");
		watch(() => props.isPlay, (now, prev) => {
			if (props.isPlay) {
				Transport.pause();
			} else {
				Transport.start();
			}
    })






		// 소리 출력
		const context = new AudioContext()
    let o = null
    let g = null
		const noteSound = computed(() => store.state.common.noteSound)

		// 너비값 설정
		const sightWdith = ref(0)
		const noteTermRate = ref(0)
		const setWidth = () => {
			const sightElement = document.getElementById('sight')
			if(sightElement){
				sightWdith.value = sightElement.offsetWidth / 10
				noteTermRate.value = sightWdith.value / noteTerm.value * 10
			}
		}
    onMounted(setWidth)
		window.addEventListener('resize', setWidth)

		// 노트 슬라이드

		const entry = Object.values(PitchSet)
		const noteTerm = ref(60000 / props.bpm)
		const moveTimer = ref(0)
		let millisecond = 0
		const interval = setTimeout(function run() {
			// TODO 재생설정?
			if(props.isPlay){
				if(millisecond >= noteTerm.value){
					const note = entryQueue.value.splice(0, 1)
					// 데이터 추가
					const item:NoteEntry = {type: 'note',length:NoteSet['1'],pitch:entry[Math.floor(Math.random() * (6 - 1))],octave:props.clef.baseOctave}
					entryQueue.value.push(item)

					// 사운드
					// if(noteSound.value && note[0]){
					// 	o = context.createOscillator()
					// 	g = context.createGain()
					// 	o.type = 'sine'
					// 	o.connect(g)
					// 	const freq = Note.freq(item.pitch.code + item.octave);
					// 	if(freq){
					// 		o.frequency.value = freq
					// 	}
					// 	g.connect(context.destination)
					// 	o.start(0)
					// 	g.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.75)
					// }

					// 타이머 초기화
					moveTimer.value = 0
					millisecond = 0
				} else {
					moveTimer.value += 1
				}
				millisecond += 10
				setTimeout(run, 10);
			}
		}, 10)
		watch(() => props.bpm, () => {
			noteTerm.value = 60000 / props.bpm
			noteTermRate.value = sightWdith.value / noteTerm.value * 10
		})
		onUnmounted(() => clearTimeout(interval))
		// TODO clear 안되는 오류

		return {
			ClefSet,
			log,
			entryQueue,
			sightWdith,
			moveTimer,
			noteTerm,
			noteTermRate,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

#sight{
	font-size: 1em;
	height: 5em;
	margin: 6% 0;
	.noteLine{
		height: 100%;
		overflow-x: clip;
		.bpm{
			position: absolute;
			text-align: left;
			height: 25%;
			top: -50%;
			img{
				height: 100%;
			}
		}
		.noteSlide{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 10%;
			&.altoClef{
				top: 11%;
			}
			&.bassClef{
				top: 22%;
			}
			i{
				height: 100%;
				top: 16%;
				left: 10%;
				position: absolute;
			}
		}
		.lineGroup{
			height: 100%;
			.line{
				height: 20%;
				box-sizing: border-box;
				border-bottom: 1px solid #000;
				&:nth-of-type(1){}
				&:nth-of-type(2){}
				&:nth-of-type(3){}
				&:nth-of-type(4){}
				&:nth-of-type(5){}
			}
		}
		.clef{
			position: absolute;
			left: 0%;
			top: 0%;
			height: 100%;
			img{
				height: 100%;
			}
			&.treble{
				height: 130%;
				top: -21%;
			}
			&.alto{
				height: 79%;
				top: 20%;
			}
			&.bass{
				height: 80%;
				top: 15%;
			}
		}
	}
}

@include tablet-inherit {
}
</style>
