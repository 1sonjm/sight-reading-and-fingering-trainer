<template>
	<div id="sightReadingView">
		<button
			@click="changeClef(ClefSet.treble.code)">{{ t(ClefSet.treble.i18n) }}</button>
		<button
			@click="changeClef(ClefSet.alto.code)">{{ t(ClefSet.alto.i18n) }}</button>
		<button
			@click="changeClef(ClefSet.bass.code)">{{ t(ClefSet.bass.i18n) }}</button>
		<input
			type="range"
			min="1"
			max="200"
			v-model.number="bpm">
		<Sight
			:bpm="bpm"
			:clef="selectedClef"/>
		<Popper
			:hover="true"
			:interactive="false">
			<button>Trigger element1</button>
			<template #content>
				<div>This is the Popper content</div>
			</template>
		</Popper>
		<Popper content="This is the Popper content">
			<button>Trigger element2</button>
		</Popper>
		<input
			type="checkbox"
			id="noteSound"
			@change="toggleNoteSound">
		<label for="noteSound">노트 음</label>
	</div>
</template>

<script lang="ts">
import Sight from '@/components/Sight.vue'
import { ClefSet, ClefCode, ClefType } from '@/@types/musicalNotation'

import {
	computed,
	defineComponent, Prop, PropType, ref, Ref,
	onMounted,
} from 'vue'
import { useI18n } from 'vue-i18n'
import { useLogger } from 'vue-logger-plugin'
import Popper from 'vue3-popper';
import store from '@/store'

export default defineComponent({
	name: 'SightReadingView',
	components: {
		Sight,
		Popper,
	},
	props: {
	},
	setup(props) {
		onMounted(() => ClefSet)
		const { t } = useI18n()
		const log = useLogger()
		const selectedClef = ref(ClefSet.treble) as Ref<ClefType>
		const changeClef = (type: ClefCode) => {
			selectedClef.value = ClefSet[type] as ClefType
		}
		const bpm = ref(60)

		// TODO 초기값 설정할것
		const toggleNoteSound = () => {
			store.commit('ToggleNoteSound')
			log.debug('ToggleNoteSound', store.state.common.noteSound)
		}

		return {
			ClefSet,
			t, log,
			selectedClef,
			changeClef,
			bpm,
			toggleNoteSound,
		}
	},
})
</script>

<style lang="scss" scoped>
@import "@/scss/_mixin";

#sightReadingView{}

@include tablet-inherit{
  #sightReadingView{}
}
</style>
