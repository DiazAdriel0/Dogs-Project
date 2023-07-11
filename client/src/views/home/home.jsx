import style from './home.module.css'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
	getAllDogs,
	getTemperaments,
	filterByTemperament,
	orderDogs,
	setSelectedTemperaments,
	setSelectedOrder,
} from '../../redux/actions/actions'
import Select from 'react-dropdown-select'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'

const Home = () => {
	// Global states
	const allTemperaments = useSelector(state => state.allTemperaments)
	const allDogs = useSelector(state => state.allDogs)
	const selectedTemperaments = useSelector(state => state.selectedTemperaments)
	const selectedOrder = useSelector(state => state.selectedOrder)
	const currentPage = useSelector(state => state.currentPage)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!allDogs.length) dispatch(getAllDogs())
		if (!allTemperaments.length) dispatch(getTemperaments())
	}, [])

	// Handlers
	const handleTemperamentChange = selected => {
		const selectedArray = selected.map(option => option.value)
		dispatch(setSelectedTemperaments(selectedArray))
		dispatch(filterByTemperament(selectedArray))
		if (!selected.length) dispatch(setSelectedTemperaments([]))
	}

	const handleOrderChange = selected => {
		// If the 'selected' array has no length, the app crashes
		if (selected.length) {
			const { value } = selected[0]
			dispatch(setSelectedOrder(value))
			dispatch(orderDogs(value))
		} else {
			dispatch(setSelectedOrder(''))
			dispatch(orderDogs(''))
		}
	}

	const handleClick = () => {
		dispatch(getAllDogs())
		dispatch(setSelectedTemperaments([]))
	}

	// Pagination
	const perPage = 8
	const firstIndex = perPage * (currentPage - 1)
	const lastIndex = perPage * currentPage - 1
	const currentPageDogs = allDogs.slice(firstIndex, lastIndex + 1)

	// Order Options
	const orderOptions = [
		'A - Z',
		'Z - A',
		'Ascending Weight',
		'Descending Weight',
	]

	return (
		<div className={style.containerHome}>
			<h1>Home</h1>
			<button onClick={handleClick}>Reset All Filters</button>
			<SearchBar />

			<Select
				options={orderOptions.map(order => ({
					value: order,
					label: order,
				}))}
				values={[]}
				onChange={handleOrderChange}
				clearable
				placeholder={selectedOrder || 'Order Dogs'}
				closeOnSelect
			/>

			<Select
				options={allTemperaments.map(temperament => ({
					value: temperament,
					label: temperament,
				}))}
				values={[]}
				onChange={handleTemperamentChange}
				multi
				clearable
				placeholder={selectedTemperaments.join(', ') || 'Temperaments'}
				closeOnSelect
			/>

			<Pagination />
			<Cards allDogs={currentPageDogs} />
			<Pagination />
		</div>
	)
}

export default Home
