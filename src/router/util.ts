import {
	RouteLocationNormalized,
} from 'vue-router'

export interface ParamMapping{
	key: string,
	type: StringConstructor | NumberConstructor | BooleanConstructor,
	default?: string | number | boolean,
}
export function paramsToPropsCaster(query: Array<ParamMapping>, params: Array<ParamMapping>) {
	return (route: RouteLocationNormalized) => {
		const nameRouteQuery = Object.values(query).map((keySet) => {
			if (route.params[keySet.key] === undefined) {
				if (keySet.default !== undefined) {
					return [keySet.key, keySet.type(keySet.default)]
				}
			}

			return [keySet.key, keySet.type(route.params[keySet.key])]
		})

		const nameRouteParam = Object.values(params).map((keySet) => {
			if (route.params[keySet.key] === undefined) {
				if (keySet.default === undefined) {
					throw new TypeError(`"${keySet.key}" not have default value of route.params`)
				} else {
					return [keySet.key, keySet.type(keySet.default)]
				}
			}

			return [keySet.key, keySet.type(route.params[keySet.key])]
		})

		const props = Object.fromEntries(Object.assign(nameRouteParam, nameRouteQuery))
		return props
	}
}
