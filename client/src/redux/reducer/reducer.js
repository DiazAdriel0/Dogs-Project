import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
	ORDER_DOGS,
	SEARCH_BY_NAME,
	SELECTED_TEMPERAMENTS,
	SELECTED_ORDER,
	SELECTED_ORIGIN,
	CURRENT_PAGE,
	ORIGIN,
} from '../actions/actionTypes'
import { ascendingOrder, descendingOrder } from '../utils/orderFunctions'
import {
	filterByName,
	/* filterByTemp, */
	filterMaster,
} from '../utils/filterFunctions'

const initialState = {
	allDogs: [],
	allDogsCopy: [],
	allDogsFiltered: [],

	allTemperaments: [],
	selectedTemperaments: [],
	selectedOrder: [],
	selectedOrigin: [],

	currentPage: 1,
}

const rootReducer = (state = initialState, { type, payload }) => {
	let orderedDogs = []
	let orderedCopy = []
	let filteredDogs = []

	switch (type) {
		case GET_ALL_DOGS:
			return {
				...state,
				allDogs: payload,
				allDogsCopy: payload,
				allDogsFiltered: payload,
			}

		case GET_TEMPERAMENTS:
			return {
				...state,
				allTemperaments: payload,
			}

		case SEARCH_BY_NAME:
			filteredDogs = filterByName(state.allDogs, payload)
			return {
				...state,
				allDogs: filteredDogs.length ? filteredDogs : state.allDogs,
				allDogsFiltered: filteredDogs.length ? filteredDogs : state.allDogs,
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
				selectedOrder: [...payload],
			}

		case SELECTED_ORIGIN:
			return {
				...state,
				selectedOrigin: [...payload],
			}
		// CAMBIOS
		case FILTER_BY_TEMPERAMENT:
			filteredDogs = filterMaster(state.allDogsCopy, [
				state.selectedTemperaments,
				state.selectedOrigin,
			])
			if (payload.length) {
				return {
					...state,
					allDogs: filteredDogs,
					allDogsFiltered: filteredDogs,
					currentPage: 1,
				}
			} else {
				return {
					...state,
					allDogs: state.allDogsCopy,
					allDogsFiltered: state.allDogsCopy,
					selectedTemperaments: [],
					currentPage: 1,
				}
			}

		case ORDER_DOGS:
			if (payload === 'A - Z' || !payload.length) {
				orderedDogs = ascendingOrder(state.allDogs, 'name')
				orderedCopy = ascendingOrder(state.allDogsCopy, 'name')
			} else if (payload === 'Z - A') {
				orderedDogs = descendingOrder(state.allDogs, 'name')
				orderedCopy = descendingOrder(state.allDogsCopy, 'name')
			} else if (payload === 'Ascending Weight') {
				orderedDogs = ascendingOrder(state.allDogs, 'weight')
				orderedCopy = ascendingOrder(state.allDogsCopy, 'weight')
			} else if (payload === 'Descending Weight') {
				orderedDogs = descendingOrder(state.allDogs, 'weight')
				orderedCopy = descendingOrder(state.allDogsCopy, 'weight')
			}
			return {
				...state,
				allDogs: orderedDogs,
				allDogsFiltered: orderedDogs,
				allDogsCopy: orderedCopy,
				selectedOrder: payload.length
					? [{ value: payload, label: payload }]
					: [],
				currentPage: 1,
			}

		case CURRENT_PAGE:
			return {
				...state,
				currentPage: payload,
			}

		case ORIGIN:
			if (payload === 'Only API Dogs') {
				filteredDogs = filterMaster(state.allDogsCopy, [
					state.selectedTemperaments,
					state.selectedOrigin,
				])
				return {
					...state,
					allDogs: filteredDogs,
					allDogsFiltered: filteredDogs,
					currentPage: 1,
				}
			}
			if (payload === 'Only Created Dogs') {
				filteredDogs = filterMaster(state.allDogsCopy, [
					state.selectedTemperaments,
					state.selectedOrigin,
				])
				return {
					...state,
					allDogs: filteredDogs,
					allDogsFiltered: filteredDogs,
					currentPage: 1,
				}
			} else {
				state.selectedOrigin = []
				filteredDogs = filterMaster(state.allDogsCopy, [
					state.selectedTemperaments,
					state.selectedOrigin,
				])
				return {
					...state,
					selectedOrigin: [],
					allDogs: filteredDogs,
					allDogsFiltered: filteredDogs,
					currentPage: 1,
				}
			}

		default:
			return { ...state }
	}
}

export default rootReducer
