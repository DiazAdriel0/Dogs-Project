import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
	ORDER_DOGS,
	SEARCH_BY_NAME,
	SELECTED_TEMPERAMENTS,
	CURRENT_PAGE,
} from '../actions/actionTypes'
import { ascendingOrder, descendingOrder } from '../utils/orderFunctions'
import { filterByTemp } from '../utils/filterFunctions'

const initialState = {
	allDogs: [],
	allDogsCopy: [],
	allTemperaments: [],
	selectedTemperaments: [],
	currentPage: 1,
}

const rootReducer = (state = initialState, { type, payload }) => {
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

		case SEARCH_BY_NAME:
			return {
				...state,
				allDogs: payload,
				currentPage: 1,
			}

		case SELECTED_TEMPERAMENTS:
			return {
				...state,
				selectedTemperaments: [...payload],
			}

		case FILTER_BY_TEMPERAMENT:
			if (payload.length) {
				return {
					...state,
					allDogs: filterByTemp(state.allDogsCopy, payload),
					currentPage: 1,
				}
			} else {
				return {
					...state,
					allDogs: state.allDogsCopy,
					currentPage: 1,
				}
			}

		case ORDER_DOGS:
			if (payload === 'A-Z') {
				const orderedDogs = ascendingOrder(state.allDogs, 'name')
				return {
					...state,
					allDogs: orderedDogs,
					currentPage: 1,
				}
			} else if (payload === 'Z-A') {
				const orderedDogs = descendingOrder(state.allDogs, 'name')
				return {
					...state,
					allDogs: orderedDogs,
					currentPage: 1,
				}
			} else if (payload === 'AscWeight') {
				const orderedDogs = ascendingOrder(state.allDogs, 'weight')
				return {
					...state,
					allDogs: orderedDogs,
					currentPage: 1,
				}
			} else if (payload === 'DescWeight') {
				const orderedDogs = descendingOrder(state.allDogs, 'weight')
				return {
					...state,
					allDogs: orderedDogs,
					currentPage: 1,
				}
			}
			return {
				...state,
			}

		case CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			}

		default:
			return { ...state }
	}
}

export default rootReducer
