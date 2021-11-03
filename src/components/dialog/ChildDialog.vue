<template>
	<BaseDialog
		:modal="false"
		:isTransparent="true"
		:headerText="'선택 기록'"
		@close="closing">
		<div id="childDialog">
		</div>
	</BaseDialog>
</template>

<script lang="ts">
import BaseDialog from '@/components/dialog/BaseDialog.vue'

import {
	defineComponent, PropType, computed, ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'HistoryDialog',
	components: {
		BaseDialog,
	},
	props: {
	},
	emits: ['close'],
	setup(props, { emit }) {
		const log = useLogger()
		const closing = () => {
			emit('close')
		}

		return {
			log,
			closing,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

#childDialog{
}

@include tablet-inherit {
  #childDialog{
	}
}
</style>
