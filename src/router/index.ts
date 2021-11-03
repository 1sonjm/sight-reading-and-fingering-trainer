import {
	createRouter,
	createWebHistory,
	RouteRecordRaw,
} from 'vue-router'
import { paramsToPropsCaster } from '@/router/util'

const routes: Array<RouteRecordRaw> = [
	{
		component: () => import('@/views/Home.vue'),
		path: '/',
		name: 'Home',
	},
	{
		component: () => import('@/views/FingeringView.vue'),
		path: '/fingering',
		name: 'FingeringView',
	},
	{
		component: () => import('@/views/SightReadingView.vue'),
		path: '/sightReading',
		name: 'SightReadingView',
	},
	// {
	// 	component: () => import('@/views/Templet.vue'),
	// 	path: '/templet',
	// 	name: 'Templet',
	// 	props: paramsToPropsCaster(
	// 		[
	// 			{ key: 'id', type: Number },
	// 			{ key: 'contentType', type: Number, default: -1 },
	// 		],
	// 		[],
	// 	),
	// },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
