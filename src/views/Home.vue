<template>
	<div id="home">
		<img alt="Vue logo" src="@/assets/logo.png">
    <button @click="menuToggle">메뉴토글</button>
	</div>
</template>

<script lang="ts">

import {
	defineComponent, ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import store from '@/store'

export default defineComponent({
	name: 'Home',
	components: {
	},
	setup() {
		const log = useLogger()
		const { t } = useI18n()
		const now = ref(dayjs())

    const menuToggle = ()=>{
      store.commit('ToggleMenu')
    }

		return {
			log,
			t,
			now,
      menuToggle,
		}
	},
})
</script>

<style lang="scss">

</style>
