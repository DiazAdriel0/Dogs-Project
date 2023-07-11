import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
	ORDER_DOGS,
	SEARCH_BY_NAME,
	SELECTED_TEMPERAMENTS,
	SELECTED_ORDER,
	CURRENT_PAGE,
} from '../actions/actionTypes'
import { ascendingOrder, descendingOrder } from '../utils/orderFunctions'
import { filterByTemp } from '../utils/filterFunctions'

const initialState = {
	allDogs: [],
	allDogsCopy: [],

	allTemperaments: [],
	selectedTemperaments: [],
	selectedOrder: '',

	currentPage: 1,
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

		case SELECTED_ORDER:
			return {
				...state,
				selectedOrder: payload,
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
			if (payload === 'A-Z' || payload === '')
				orderedDogs = ascendingOrder(state.allDogs, 'name')
			else if (payload === 'Z-A')
				orderedDogs = descendingOrder(state.allDogs, 'name')
			else if (payload === 'AscWeight')
				orderedDogs = ascendingOrder(state.allDogs, 'weight')
			else if (payload === 'DescWeight')
				orderedDogs = descendingOrder(state.allDogs, 'weight')

			return {
				...state,
				allDogs: orderedDogs,
				currentPage: 1,
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
