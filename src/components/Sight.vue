<template>
	<div id="sight">
		<div class="noteLine">
			<div class="noteSlide">
				<i
					v-for="(code, index) in noteQueue"
					:key="index">
					<template v-if="code.type === 'note'">
						<Note
							:length="code.length"
							:key-signature="code.keySignature"/>
					</template>
					<template v-else>
						<Rest :length="code.length"/>
					</template>
				</i>
			</div>
			<div class="lineGroup">
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
				<p class="line"></p>
			</div>
			<div
				class="clef"
				:class="clef.code">
				<img :src="require(`@/assets/icon/musicalNotation/${clef.image}`)">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ClefType, NoteSet, RestSet } from '@/@types/musicalNotation'
import Note from '@/components/Note.vue'
import Rest from '@/components/Rest.vue'

import {
	defineComponent, PropType, computed, ref, Ref,
} from 'vue'
import { useLogger } from 'vue-logger-plugin'

export default defineComponent({
	name: 'sight',
	components: {
		Note,
		Rest,
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
		const noteQueue = ref([
			{type: 'note',length:NoteSet['1/4']},
			{type: 'rest',length:RestSet['1/4']},
			{type: 'note',length:NoteSet['1/4'],keySignature:'#'},
			{type: 'note',length:NoteSet['1/4']},
		]);

		return {
			log,
			noteQueue,
		}
	},
})
</script>

<style lang="scss">
@import "@/scss/_mixin";

#sight{
	font-size: 1em;
	height: 5em;
	margin: 4% 0;
	.noteLine{
		height: 100%;
		.noteSlide{
			width: 100%;
			height: 100%;
			position: absolute;
			i{
				position: absolute;
			}
		}
		.lineGroup{
			height: 100%;
			.line{
				height: 20%;
				box-sizing: border-box;
				border-bottom: 1px solid #000;
				&:nth-of-type(1){}
				&:nth-of-type(2){}
				&:nth-of-type(3){}
				&:nth-of-type(4){}
				&:nth-of-type(5){}
			}
		}
		.clef{
			position: absolute;
			left: 0%;
			top: 0%;
			height: 100%;
			img{
				height: 100%;
			}
			&.G{
				height: 130%;
				top: -21%;
			}
			&.F{
				height: 80%;
				top: 15%;
			}
			&.C{
				height: 79%;
				top: 20%;
			}
		}
	}
}

@include tablet-inherit {
}
</style>
