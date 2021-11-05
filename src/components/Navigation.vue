<template>
	<nav id="navigation" class="dropdown">
		<button
			id="navigationToggleButton"
			:class="{on:isMenuOpen}"
			@click="toggleMenu">
			<p></p>
			<p></p>
			<p></p>
		</button>
		<div
			id="navigationArea"
			:class="{on:isMenuOpen}">
			<ul>
				<li>
					<router-link to="/fingering">{{ t('menu.fingering') }}</router-link>
				</li>
				<li>
					<router-link to="/sightReading">{{ t('menu.sightReading') }}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import {
	defineComponent,
	computed,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'
import { useI18n } from 'vue-i18n'
import store from '@/store'

export default defineComponent({
	name: 'Navigation',
	components: {
	},
	props: {
	},
	setup() {
		const log = useLogger()
		const { t } = useI18n()
		const isMenuOpen = computed(() => store.state.common.menu.isOpen)
		const toggleMenu = () => store.commit('ToggleMenu')

		return {
			log,
			t,
			isMenuOpen,
			toggleMenu,
		}
	},
})
</script>

<style lang="scss" scoped>
@import "@/scss/_mixin";


#navigation{
	position: relative;
	text-align: left;
	#navigationToggleButton{
		position: relative;
		display: inline-block;
		background: $color-point-secondary-lighten;
		border: none;
		border-radius: 50%;
		width: $size-header-height;
		height: $size-header-height;
		z-index: 1000;
		margin: 0;
		transition: ease 0.2s;
		transition-property: top;
		p{
			display: block;
			width: 60%;
			position: absolute;
			height: 2px;
			border-radius: 3px;
			background-color: #fff;
			margin: 0;
			left: 5px;
			transition: ease 0.2s;
			transition-property: top, transform, opacity;
			&:nth-child(1){
				top: 29%;
			}
			&:nth-child(2){
				top: 45%;
			}
			&:nth-child(3){
				top: 62%;
			}
		}
		&.on{
			p{
				&:nth-child(1){
					transform: rotateZ(-45deg);
					top: 50%;
				}
				&:nth-child(2){
					opacity: 0;
				}
				&:nth-child(3){
					transform: rotateZ(45deg);
					top: 50%;
				}
			}
		}
	}
	#navigationArea{
		z-index: 1;
		position: fixed;
		background: $color-point-secondary-lighten;
		top: $size-header-height + 0.5em;
		left: -100%;
		opacity: 0;
		transition: 0.5s ease;
		transition-property: opacity top;
		&.on{
			left: 0;
			opacity: 1;
		}
		ul{
			list-style: none;
		}
	}
}
</style>
