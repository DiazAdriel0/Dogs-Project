import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
	ORDER_DOGS,
} from '../actions/actionTypes'
import { ascendingOrder, descendingOrder } from '../utils/orderFunctions'
import { filterByTemp } from '../utils/filterFunctions'

const initialState = {
	allDogs: [],
	allDogsCopy: [],
	allTemperaments: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
	let orderedDogs = []

	switch (type) {
		case GET_ALL_DOGS:
			return {
				...state,
				allDogs: payload,
				allDogsCopy: payload,
			}

		case GET_TEMPERAMENTS:
			return {
				...state,
				allTemperaments: payload,
			}

		case FILTER_BY_TEMPERAMENT:
			if (payload.length) {
				return {
					...state,
					allDogs: filterByTemp(state.allDogsCopy, payload),
				}
			} else {
				return {
					...state,
					allDogs: state.allDogsCopy,
				}
			}

		case ORDER_DOGS:
			if (payload === 'A-Z') {
				orderedDogs = ascendingOrder(state.allDogs, 'name')
				return {
					...state,
					allDogs: orderedDogs,
				}
			} else if (payload === 'Z-A') {
				orderedDogs = descendingOrder(state.allDogs, 'name')
				return {
					...state,
					allDogs: orderedDogs,
				}
			} else if (payload === 'AscWeight') {
				orderedDogs = ascendingOrder(state.allDogs, 'weight')
				return {
					...state,
					allDogs: orderedDogs,
				}
			} else if (payload === 'DescWeight') {
				orderedDogs = descendingOrder(state.allDogs, 'weight')
				return {
					...state,
					allDogs: orderedDogs,
				}
			}
			return {
				...state,
			}

		default:
			return { ...state }
	}
}

export default rootReducer
