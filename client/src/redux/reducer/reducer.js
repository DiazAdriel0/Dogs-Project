import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
} from '../actions/actionTypes'

const initialState = {
	allDogs: [],
	allTemperaments: [],
	filteredByTemp: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_DOGS:
			return {
				...state,
				allDogs: payload,
			}
		case GET_TEMPERAMENTS:
			return {
				...state,
				allTemperaments: payload,
			}
		case FILTER_BY_TEMPERAMENT:
			return {
				...state,
				filteredByTemp: payload,
			}
		default:
			return { ...state }
	}
}

export default rootReducer
