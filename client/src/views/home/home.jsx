import style from './home.module.css'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllDogs, getTemperaments } from '../../redux/actions/actions'
import Select from 'react-dropdown-select'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'
import useHomeHandlers from '../../hooks/useHomeHandlers'
import useOptions from '../../hooks/useOptions'
import usePagination from '../../hooks/usePagination'

const Home = () => {
	// Global states
	const allTemperaments = useSelector(state => state.allTemperaments)
	const allDogs = useSelector(state => state.allDogs)
	const selectedTemperaments = useSelector(state => state.selectedTemperaments)
	const selectedOrder = useSelector(state => state.selectedOrder)
	const selectedOrigin = useSelector(state => state.selectedOrigin)

	// Custom Hooks
	const homeHandlers = useHomeHandlers()
	const options = useOptions()
	const pagination = usePagination()

	const dispatch = useDispatch()

	useEffect(() => {
		if (!allDogs.length) dispatch(getAllDogs())
		if (!allTemperaments.length) dispatch(getTemperaments())
	}, [])

	return (
		<div className={style.containerHome}>
			<h1>Home</h1>
			<button onClick={homeHandlers.handleClick}>Reset All Filters</button>
			<SearchBar />

			<div>
				{!homeHandlers.error && (
					<Select
						options={options.originOptions}
						values={selectedOrigin}
						onChange={homeHandlers.handleFromChange}
						clearable
						placeholder={'Origin of Dogs'}
						closeOnSelect
					/>
				)}

				<Select
					options={options.orderOptions}
					values={selectedOrder}
					onChange={homeHandlers.handleOrderChange}
					clearable
					placeholder={'Order Dogs'}
					closeOnSelect
				/>

				<Select
					options={options.temperamentsOptions}
					values={selectedTemperaments}
					onChange={homeHandlers.handleTemperamentChange}
					multi
					clearable
					placeholder={selectedTemperaments.join(', ') || 'Temperaments'}
					closeOnSelect
				/>
			</div>

			<Pagination />
			<Cards allDogs={pagination.currentPageDogs} />
			<Pagination />
		</div>
	)
}

export default Home
