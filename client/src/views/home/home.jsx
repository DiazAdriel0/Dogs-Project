import style from './home.module.css'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
	getAllDogs,
	getTemperaments,
	filterByTemperament,
	orderDogs,
	setSelectedTemperaments,
} from '../../redux/actions/actions'
import SelectDropdown from '../../components/selectDropdown/selectDropdown'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'

const Home = () => {
	// Local states
	const [selectedOrder, setSelectedOrder] = useState('')
	const [reset, setReset] = useState(false)

	// Global states
	const allTemperaments = useSelector(state => state.allTemperaments)
	const allDogs = useSelector(state => state.allDogs)
	const selectedTemperaments = useSelector(state => state.selectedTemperaments)
	const currentPage = useSelector(state => state.currentPage)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!allDogs.length) dispatch(getTemperaments())
		if (!allTemperaments.length) dispatch(getAllDogs())
		dispatch(filterByTemperament(selectedTemperaments))
		dispatch(orderDogs(selectedOrder)) // The order remains even when temperament filters are removed
		setReset(false)
	}, [selectedTemperaments, reset])

	// Handlers
	const handleTemperamentChange = selected => {
		const selectedArray = selected.map(option => option.value)
		dispatch(setSelectedTemperaments(selectedArray))
	}
	const handleOrderChange = selected => {
		// If the 'selected' array has no length, the app crashes
		if (selected.length) {
			const { value } = selected[0]
			dispatch(orderDogs(value))
			setSelectedOrder(value)
		}
	}
	const handleClick = () => {
		dispatch(getAllDogs())
		dispatch(setSelectedTemperaments([]))
		setSelectedOrder('A-Z')
		setReset(true)
	}

	// Pagination
	const perPage = 8
	const firstIndex = perPage * (currentPage - 1)
	const lastIndex = perPage * currentPage - 1
	const currentPageDogs = allDogs.slice(firstIndex, lastIndex + 1)

	return (
		<div className={style.containerHome}>
			<h1>Home</h1>
			<button onClick={handleClick}>Reset All Filters</button>
			<SearchBar />
			{/* <button onClick={handleFilter}>Filters</button> */}
			{!reset && (
				<SelectDropdown
					options={[
						{ value: 'A-Z', label: 'A - Z' },
						{ value: 'Z-A', label: 'Z - A' },
						{ value: 'AscWeight', label: 'Ascending Weight' },
						{ value: 'DescWeight', label: 'Descending Weight' },
					]}
					multi={false}
					clearable
					placeholder='Order Dogs'
					onChange={handleOrderChange}
					closeOnSelect={true}
				/>
			)}
			{!reset && (
				<SelectDropdown
					options={allTemperaments.map(temperament => ({
						value: temperament,
						label: temperament,
					}))}
					multi={true}
					clearable
					placeholder={selectedTemperaments.join(', ') || 'Temperaments'}
					onChange={handleTemperamentChange}
					closeOnSelect={true}
				/>
			)}
			<Cards allDogs={currentPageDogs} />
			<Pagination />
		</div>
	)
}

export default Home
