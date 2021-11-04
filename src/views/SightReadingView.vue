<template>
	<div id="sightReadingView">
		<button
			@click="changeClef('G')">ggggg</button>
		<button
			@click="changeClef('F')">fffff</button>
		<button
			@click="changeClef('C')">ccccc</button>
		<Sight
			:clef="selectedClef"/>
	</div>
</template>

<script lang="ts">
import Sight from '@/components/Sight.vue'
import { Clef, ClefCode, ClefType } from '@/@types/clef'

import {
	computed,
	defineComponent, Prop, PropType, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'SightReadingView',
	components: {
		Sight,
	},
	props: {
	},
	setup(props) {
		const log = useLogger()
		const selectedClef = ref(Clef.G) as Ref<ClefType>
		const changeClef = (type: ClefCode) => {
			selectedClef.value = Clef[type] as ClefType
		}

		return {
			log,
			selectedClef,
			changeClef,
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
