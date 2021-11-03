<template>
	<div id="home">
		<img alt="Vue logo" src="@/assets/logo.png">
		{{ t('hello') }}<br>
		{{ t('test') }}
	</div>
</template>

<script lang="ts">

import {
	defineComponent, ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'

export default defineComponent({
	name: 'Home',
	components: {
	},
	setup() {
		const log = useLogger()
		const { t } = useI18n()
		const now = ref(dayjs())

		return {
			log,
			t,
			now,
		}
	},
})
</script>

<style lang="scss">

</style>
