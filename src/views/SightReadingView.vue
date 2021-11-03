<template>
	<div id="sightReadingView">
	</div>
</template>

<script lang="ts">

import {
	computed,
	defineComponent, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'SightReadingView',
	components: {
	},
	props: {
	},
	setup(props) {
		const log = useLogger()

		return {
			log,
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
