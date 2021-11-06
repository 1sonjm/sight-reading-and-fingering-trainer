<template>
	<div id="sightReadingView">
		<button
			@click="changeClef('G')">ggggg</button>
		<button
			@click="changeClef('F')">fffff</button>
		<button
			@click="changeClef('C')">ccccc</button>
		<input
			type="range"
			min="1"
			max="200"
			v-model="bpm">
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
	</div>
</template>

<script lang="ts">
import Sight from '@/components/Sight.vue'
import { ClefSet, ClefCode, ClefType } from '@/@types/musicalNotation'

import {
	computed,
	defineComponent, Prop, PropType, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'
import Popper from 'vue3-popper';

export default defineComponent({
	name: 'SightReadingView',
	components: {
		Sight,
		Popper,
	},
	props: {
	},
	setup(props) {
		const log = useLogger()
		const selectedClef = ref(ClefSet.G) as Ref<ClefType>
		const changeClef = (type: ClefCode) => {
			selectedClef.value = ClefSet[type] as ClefType
		}
		const bpm = ref(60)

		return {
			log,
			selectedClef,
			changeClef,
			bpm,
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
