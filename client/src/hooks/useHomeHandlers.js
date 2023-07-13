import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {
	getAllDogs,
	filterByTemperament,
	orderDogs,
	setSelectedTemperaments,
	setSelectedOrder,
	setSelectedOrigin,
	setCurrentPage,
	dogsFrom,
} from '../redux/actions/actions'

const useHomeHandlers = () => {
	// Global States
	const selectedTemperaments = useSelector(state => state.selectedTemperaments)
	const selectedOrder = useSelector(state => state.selectedOrder)
	const selectedOrigin = useSelector(state => state.selectedOrigin)

	// Local States
	// eslint-disable-next-line no-unused-vars
	const [selectedOriginOptions, setSelectedOriginOptions] = useState([])
	// eslint-disable-next-line no-unused-vars
	const [selectedOrderOptions, setSelectedOrderOptions] = useState([])
	// eslint-disable-next-line no-unused-vars
	const [selectedTempOptions, setSelectedTempOptions] = useState([])
	const [error, setError] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		setSelectedOriginOptions(selectedOrigin)
		setSelectedOrderOptions(selectedOrder)
		setSelectedTempOptions(selectedTemperaments)
		setError(false)
	}, [error])

	// Handlers
	const handleFromChange = selected => {
		try {
			if (selected.length) {
				const { value } = selected[0]

				if (value === 'Only API Dogs') {
					setSelectedOriginOptions(selected)
					dispatch(setSelectedOrigin(selected))
					dispatch(dogsFrom(1))
				} else if (value === 'Only Created Dogs') {
					dispatch(dogsFrom(NaN))
					dispatch(setSelectedOrigin(selected))
					setSelectedOriginOptions(selected)
				}
			} else {
				setSelectedOriginOptions([])
				dispatch(setSelectedOrigin([]))
				dispatch(dogsFrom('clear'))
			}
		} catch (error) {
			alert(error.message)
			setError(true)
			setSelectedOriginOptions([])
			dispatch(setSelectedOrigin([]))
		}
	}

	const handleOrderChange = selected => {
		// If the 'selected' array has no length, the app crashes
		if (selected.length) {
			const { value } = selected[0]
			setSelectedOrderOptions(selected)
			dispatch(setSelectedOrder(selected))
			dispatch(orderDogs(value))
		} else {
			dispatch(setSelectedOrder(selected))
			dispatch(orderDogs([]))
		}
	}

	const handleTemperamentChange = selected => {
		const selectedArray = selected.map(option => option.value)
		setSelectedTempOptions(selected)
		dispatch(setSelectedTemperaments(selected))
		dispatch(filterByTemperament(selectedArray))
		if (!selected.length) {
			dispatch(setSelectedTemperaments([]))
		}
	}

	const handleClick = () => {
		dispatch(getAllDogs())
		dispatch(setSelectedTemperaments([]))
		setSelectedTempOptions([])
		dispatch(setSelectedOrder([]))
		setSelectedOrderOptions([])
		dispatch(setSelectedOrigin([]))
		setSelectedOriginOptions([])
		dispatch(setCurrentPage(1))
	}

	return {
		handleTemperamentChange,
		handleOrderChange,
		handleFromChange,
		handleClick,
		setSelectedOriginOptions,
		setSelectedOrderOptions,
		setSelectedTempOptions,
		error,
	}
}

export default useHomeHandlers
