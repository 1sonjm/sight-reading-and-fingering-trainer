<template>
	<div
		class="length"
		:class="length.code">
		<img :src="require(`@/assets/icon/musicalNotation/${length.image}`)">
	</div>
</template>

<script lang="ts">
import { NoteType } from '@/@types/musicalNotation'

import {
	defineComponent, PropType, computed, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'note',
	components: {
	},
	props: {
		length: {
			type: Object as PropType<NoteType>,
			require: true,
		},
		keySignature: {
			type: String,
		}
	},
	setup(props) {
		const log = useLogger()

		return {
			log,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

.length{
	img{
		height: 100%;
	}
}
</style>
