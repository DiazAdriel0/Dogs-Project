/* eslint-disable no-case-declarations */
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
	change: true,
}

const rootReducer = (state = initialState, { type, payload }) => {
	/* let orderedAllDogs = []
	let filteredDogs = [] */

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
			/* filteredDogs = filterByTemp(state.allDogsCopy, payload) */
			return {
				...state,
				allDogs: filterByTemp(state.allDogsCopy, payload),
				change: !state.change,
			}

		case ORDER_DOGS:
			if (payload === 'A-Z') {
				return {
					...state,
					allDogs: ascendingOrder(state.allDogs, 'name'),
					change: !state.change,
				}
				/* orderedAllDogs = ascendingOrder(state.allDogs, 'name') */
			} else if (payload === 'Z-A') {
				return {
					...state,
					allDogs: descendingOrder(state.allDogs, 'name'),
					change: !state.change,
				}
				/* orderedAllDogs = descendingOrder(state.allDogs, 'name') */
			} else if (payload === 'AscWeight') {
				return {
					...state,
					allDogs: ascendingOrder(state.allDogs, 'weight'),
					change: !state.change,
				}
				/* orderedAllDogs = ascendingOrder(state.allDogs, 'weight') */
			} else if (payload === 'DescWeight') {
				return {
					...state,
					allDogs: descendingOrder(state.allDogs, 'weight'),
					change: !state.change,
				}
				/* orderedAllDogs = descendingOrder(state.allDogs, 'weight') */
			}
			return {
				...state,
				change: !state.change,
			}

		default:
			return { ...state }
	}
}

export default rootReducer
