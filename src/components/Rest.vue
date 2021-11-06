<template>
	<div
		class="length"
		:class="'rest'+length.code">
		<img :src="require(`@/assets/icon/musicalNotation/${length.image}`)">
	</div>
</template>

<script lang="ts">
import { RestType } from '@/@types/musicalNotation'

import {
	defineComponent, PropType, computed, ref, Ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
	name: 'rest',
	components: {
	},
	props: {
		length: {
			type: Object as PropType<RestType>,
			require: true,
		},
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
	img{
		height: 100%;
	}
}
</style>
