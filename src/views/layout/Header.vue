<template>
	<header
		id="header"
		class="contentWidthLimit">
		<section class="menu">
			<Navigation/>

			<router-link to="/" class="logo">
				<img src="@/assets/logo.png">
			</router-link>

			<div class="darkSwitch">
				<DarkmodeSwitch/>
			</div>
		</section>
		<hr class="menuLine">
	</header>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
import DarkmodeSwitch from '@/components/DarkmodeSwitch.vue'

import {
	defineComponent,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'Header',
	components: {
		Navigation,
		DarkmodeSwitch,
	},
	props: {
	},
	setup() {
		const log = useLogger()

		return {
			log,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

#header{
	width: 100%;
	position: relative;
	.menu{
		margin: auto;
		display: flex;
		justify-content: center;
		padding-top: 0.2em;
		.logo{
			flex: auto;
			cursor: pointer;
			height: $size-header-height;
			img{
				height: 100%;
			}
		}
		.darkSwitch{
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.menuLine{
		margin-top: 0.2em;
	}
}
</style>
