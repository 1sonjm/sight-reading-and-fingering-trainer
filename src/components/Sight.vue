<template>
	<div id="sight">
		<div class="noteLine">
			<p class="bpm">
				<img src="@/assets/icon/musicalNotation/note_1.4.svg">
				= {{ bpm }}
			</p>
			<div class="noteSlide">
				<i
					v-for="(code, index) in noteQueue"
					:key="index"
					:style="{transform: `translateX(${sightWdith*index - moveTimer}px)`}">
					<template v-if="code.type === 'note'">
						<Note
							:length="code.length"
							:pitch="code.pitch"
							:key-signature="code.keySignature"/>
					</template>
					<template v-else>
						<Rest :length="code.length"/>
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
import { ClefType, NoteSet, PitchSet, PitchType, RestSet } from '@/@types/musicalNotation'
import Note from '@/components/Note.vue'
import Rest from '@/components/Rest.vue'

import {
	defineComponent, PropType, ref, Ref,
	computed, watch,
	onMounted, onUnmounted,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'sight',
	components: {
		Note,
		Rest,
	},
	props: {
		bpm: {
			type: Number,
			default: 120,
		},
		clef: {
			type: Object as PropType<ClefType>,
			require: true,
		},
	},
	setup(props) {
		const log = useLogger()
		const noteQueue = ref([
			{type: 'note',length:NoteSet['1_2'],pitch:PitchSet.A},
			{type: 'rest',length:RestSet['1_4']},
			{type: 'note',length:NoteSet['1_4'],pitch:PitchSet.D,keySignature:'#'},
			{type: 'note',length:NoteSet['1_8'],pitch:PitchSet.B},
			{type: 'note',length:NoteSet['1_4'],pitch:PitchSet.F},
			{type: 'note',length:NoteSet['1'],pitch:PitchSet.G},
		]);

		// 너비값 설정
		const sightWdith = ref(0)
		const setWidth = () => {
			const sightElement = document.getElementById('sight')
			if(sightElement){
				sightWdith.value = sightElement.offsetWidth / 10
			}
		}
    onMounted(setWidth)
		window.addEventListener('resize', setWidth)

		// 노트 슬라이드
		const entry = Object.values(PitchSet);
		const moveTimer = ref(0)
		const bpmSpeed = ref(props.bpm / 60)
		const interval = setInterval(() => {
			if(moveTimer.value > 100){
				noteQueue.value.splice(0, 1)
				// 데이터 추가
				noteQueue.value.push({type: 'note',length:NoteSet['1'],pitch:entry[Math.floor(Math.random() * (6 - 1))]})
				moveTimer.value = 0
			} else {
				moveTimer.value += bpmSpeed.value
			}
		}, 16)
		watch(() => props.bpm, () => bpmSpeed.value = props.bpm / 60)
		onUnmounted(() => clearInterval(interval))

		return {
			log,
			noteQueue,
			sightWdith,
			moveTimer,
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
			i{
				height: 100%;
				top: -3%;
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
			&.G{
				height: 130%;
				top: -21%;
			}
			&.F{
				height: 80%;
				top: 15%;
			}
			&.C{
				height: 79%;
				top: 20%;
			}
		}
	}
}

@include tablet-inherit {
}
</style>
