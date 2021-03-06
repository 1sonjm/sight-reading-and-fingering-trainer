export enum Locale {
	ko = 'ko',
	en = 'en',
}
export type Location = {
	latitude: number,
	longitude: number,
}
export type Common = {
	loading:{
		isOn: boolean
		message: string | undefined
	}
	menu:{
		isOpen: boolean
	}
	locale: Locale
	location: Location
	isDarkMode: boolean
	noteSound: boolean
}

export const state: Common = {
	loading: {
		isOn: false,
		message: undefined,
	},
	menu:{
		isOpen: false,
	},
	locale: Locale.ko,
	location: {
		latitude: 37.566280592758005,
		longitude: 126.97797791533893,
	},
	isDarkMode: false,
	noteSound: false,
}
