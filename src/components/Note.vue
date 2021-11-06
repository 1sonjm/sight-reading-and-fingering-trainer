<template>
	<div
		class="length"
		:class="[
			'note'+length.code,
			pitch.code,
		]">
		<img :src="require(`@/assets/icon/musicalNotation/${length.image}`)">
		<span class="pitch">{{ t(pitch.i18n) }}</span>
	</div>
</template>

<script lang="ts">
import { NoteType, PitchType } from '@/@types/musicalNotation'

import {
	defineComponent, PropType, computed, ref, Ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
	name: 'note',
	components: {
	},
	props: {
		length: {
			type: Object as PropType<NoteType>,
			require: true,
		},
		pitch: {
			type: Object as PropType<PitchType>,
			require: true,
		},
		keySignature: {
			type: String,
		}
	},
	setup(props) {
		const { t } = useI18n()

		return {
			t,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

.length{
	height: 102%;
	position: relative;
	img{
		height: 100%;
	}
	.pitch{
		position: absolute;
		bottom: 0;
		right: 0;
	}
	&.A{
		transform: translateY(10%);
	}
	&.B{
		transform: translateY(0%);
	}
	&.C{
		transform: translateY(-10%);
	}
	&.D{
		transform: translateY(-20%);
	}
	&.E{
		transform: translateY(-30%);
	}
	&.F{
		transform: translateY(-40%);
	}
	&.G{
		transform: translateY(-50%);
	}
}
</style>
