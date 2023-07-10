import axios from 'axios'
import {
	FILTER_BY_TEMPERAMENT,
	GET_ALL_DOGS,
	GET_TEMPERAMENTS,
	ORDER_DOGS,
} from './actionTypes'

// endpoints
const dogEndpoint = 'http://localhost:3001/dogs'
const temperamentEndpoint = 'http://localhost:3001/temperaments/'

export const getAllDogs = () => {
	return async dispatch => {
		const { data } = await axios(dogEndpoint)
		try {
			if (!data) throw new Error('Error al conectar con el servidor')
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
			if (data.length === 0) throw new Error('Temperaments not found')
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

/* export const filterByTemperament = querys => {
	return async dispatch => {
		const { data } = await axios(`${dogEndpoint}?filter=${querys}`)
		return dispatch({
			type: FILTER_BY_TEMPERAMENT,
			payload: data,
		})
	}
} */
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
