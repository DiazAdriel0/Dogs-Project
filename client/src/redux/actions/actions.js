import axios from 'axios'
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
	RESET_ALL_FILTERS,
} from './actionTypes'

// Endpoints
const dogEndpoint = 'http://localhost:3001/dogs'
const temperamentEndpoint = 'http://localhost:3001/temperaments/'

export const getAllDogs = () => {
	return async dispatch => {
		try {
			const { data } = await axios(dogEndpoint)
			return dispatch({
				type: GET_ALL_DOGS,
				payload: data,
			})
		} catch (error) {
			alert(error.message)
		}
	}
}

export const getTemperaments = () => {
	return async dispatch => {
		try {
			const { data } = await axios(temperamentEndpoint)
			const orderedTemperaments = data.sort((a, b) => {
				if (a > b) return 1
				if (a < b) return -1
				return 0
			})
			return dispatch({
				type: GET_TEMPERAMENTS,
				payload: orderedTemperaments,
			})
		} catch (error) {
			alert(error.message)
		}
	}
}

export const searchDogsByName = search => {
	return async dispatch => {
		try {
			const { data } = await axios(`${dogEndpoint}?name=${search}`)
			return dispatch({
				type: SEARCH_BY_NAME,
				payload: data,
			})
		} catch (error) {
			alert(`No breed matching with ${search} search was found`)
		}
	}
}

export const filterByTemperament = temperaments => {
	return dispatch => {
		return dispatch({
			type: FILTER_BY_TEMPERAMENT,
			payload: temperaments,
		})
	}
}

export const orderDogs = order => {
	return dispatch => {
		return dispatch({
			type: ORDER_DOGS,
			payload: order,
		})
	}
}

export const setSelectedTemperaments = temperaments => {
	return dispatch => {
		return dispatch({
			type: SELECTED_TEMPERAMENTS,
			payload: temperaments,
		})
	}
}

export const setSelectedOrder = order => {
	return dispatch => {
		return dispatch({
			type: SELECTED_ORDER,
			payload: order,
		})
	}
}

export const setSelectedOrigin = origin => {
	return dispatch => {
		return dispatch({
			type: SELECTED_ORIGIN,
			payload: origin,
		})
	}
}

export const setCurrentPage = page => {
	return dispatch => {
		return dispatch({
			type: CURRENT_PAGE,
			payload: Number(page),
		})
	}
}

export const dogsFrom = typeOfId => {
	return dispatch => {
		return dispatch({
			type: ORIGIN,
			payload: typeOfId,
		})
	}
}

export const resetAllFilters = () => {
	return dispatch => {
		return dispatch({
			type: RESET_ALL_FILTERS,
			payload: [],
		})
	}
}
