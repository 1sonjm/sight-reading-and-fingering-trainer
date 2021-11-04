<template>
	<div id="sight">
		<div class="noteLine">
			<div class="lineGroup">
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
			</div>
			<div class="clef">
				<div>
					<img :src="require(`@/assets/icon/${clef.image}`)">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ClefType } from '@/@types/clef'

import {
	defineComponent, PropType, computed, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'sight',
	components: {
	},
	props: {
		count: {
			type: Number,
			require: true,
		},
		clef: {
			type: Object as PropType<ClefType>,
			require: true,
		},
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

#sight{
	font-size: 1em;
	.noteLine{
		.line{
			height: 0.5em;
			widows: 100%;
			border-bottom: 1px solid #000;
			&:nth-of-type(1){}
			&:nth-of-type(2){}
			&:nth-of-type(3){}
			&:nth-of-type(4){}
			&:nth-of-type(5){}
		}
	}
	.clef{
	}
}

@include tablet-inherit {
}
</style>
