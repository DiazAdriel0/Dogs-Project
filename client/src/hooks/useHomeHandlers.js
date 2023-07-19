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
import axios from 'axios'

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
	const [selectedTempOptions, setSelectedTempOptions] = useState([])
	const [originError, setOriginError] = useState(false)
	const [temperamentsError, setTemperamentsError] = useState(false)
	const [reset, setReset] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		setSelectedOriginOptions(selectedOrigin)
		setSelectedOrderOptions(selectedOrder)
		setSelectedTempOptions(selectedTemperaments)
		setOriginError(false)
		setTemperamentsError(false)
	}, [originError, temperamentsError])

	useEffect(() => {
		setReset(false)
	}, [reset])

	// Handlers
	const handleFromChange = selected => {
		try {
			if (selected.length) {
				const { value } = selected[0]

				if (value === 'Only API Dogs') {
					setSelectedOriginOptions(selected)
					dispatch(setSelectedOrigin(selected))
					dispatch(dogsFrom(value))
				} else if (value === 'Only Created Dogs') {
					setSelectedOriginOptions(selected)
					dispatch(setSelectedOrigin(selected))
					dispatch(dogsFrom(value))
				}
			} else {
				setSelectedOriginOptions([])
				dispatch(setSelectedOrigin([]))
				dispatch(dogsFrom('clear'))
			}
		} catch (error) {
			// alert(error.message)
			setOriginError(true)
			setSelectedOriginOptions([])
			dispatch(setSelectedOrigin([]))
			throw new Error(error.message)
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
		try {
			if (selected.length) {
				const selectedArray = selected.map(option => option.value)
				setSelectedTempOptions(selected)
				dispatch(setSelectedTemperaments(selected))
				dispatch(filterByTemperament(selectedArray))
			}

			if (!selected.length) {
				setSelectedTempOptions([])
				dispatch(setSelectedTemperaments([]))
				dispatch(filterByTemperament([]))
			}
		} catch (error) {
			setTemperamentsError(true)
			selected = selected.slice(0, selected.length - 1)
			setSelectedTempOptions(selected)
			const selectedArray = selected.map(option => option.value)
			dispatch(setSelectedTemperaments(selected))
			dispatch(filterByTemperament(selectedArray))
			throw new Error(error.message)
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
		setReset(true)
	}

	const handleDelete = (id, name) => {
		const deleteDog = async id => {
			try {
				await axios.delete(`http://localhost:3001/dogs/${id}`)
				alert("Dog deleted successfully :'(")
			} catch (error) {
				alert(error.message)
			}
		}

		const confirmation = confirm(
			`Are you sure you want to delete the "${name}" breed?`,
		)
		confirmation && handleClick()
		confirmation && deleteDog(id)
	}

	return {
		handleTemperamentChange,
		handleOrderChange,
		handleFromChange,
		handleClick,
		handleDelete,
		setSelectedOriginOptions,
		setSelectedOrderOptions,
		setSelectedTempOptions,
		originError,
		temperamentsError,
		selectedTempOptions,
		reset,
	}
}

export default useHomeHandlers
