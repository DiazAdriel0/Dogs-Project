import style from './home.module.css'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllDogs } from '../../redux/actions/actions'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'
import useHomeHandlers from '../../hooks/useHomeHandlers'
import useOptions from '../../hooks/useOptions'
import usePagination from '../../hooks/usePagination'
import SelectMaster from '../../components/Select/select'

const Home = () => {
	// Global states
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
	}, [])

	return (
		<div className={style.containerHome}>
			<div className={style.filters}>
				<SearchBar />

				{/* <Select
					className={style.orderSelect}
					options={options.orderOptions}
					values={selectedOrder}
					onChange={homeHandlers.handleOrderChange}
					clearable
					placeholder='Order Dogs'
					closeOnSelect
				/> */}
				<SelectMaster
					className={style.orderSelect}
					options={options.orderOptions}
					multi={false}
					values={selectedOrder}
					onChange={homeHandlers.handleOrderChange}
					placeholder='Order Dogs'
					/* onReset={homeHandlers.handleClick} */
					reset={homeHandlers.reset}
				/>

				{/* {!homeHandlers.originError && (
					<Select
						className={style.originSelect}
						options={options.originOptions}
						values={selectedOrigin}
						onChange={homeHandlers.handleFromChange}
						clearable
						placeholder='Origin of Dogs'
						closeOnSelect
					/>
				)} */}
				<SelectMaster
					className={style.originSelect}
					options={options.originOptions}
					multi={false}
					values={selectedOrigin}
					onChange={homeHandlers.handleFromChange}
					placeholder='Origin of Dogs'
					/* onReset={homeHandlers.handleClick} */
					reset={homeHandlers.reset}
				/>

				{/* !homeHandlers.temperamentsError && (
					<Select
						className={style.temperamentsSelect}
						options={options.temperamentsOptions}
						values={selectedTemperaments}
						onChange={homeHandlers.handleTemperamentChange}
						multi
						clearable
						placeholder='Temperaments'
						closeOnSelect
					/>
				) */}
				<SelectMaster
					className={style.temperamentsSelect}
					options={options.temperamentsOptions}
					multi={true}
					values={selectedTemperaments}
					onChange={homeHandlers.handleTemperamentChange}
					placeholder='Temperaments'
					/* onReset={homeHandlers.handleClick} */
					reset={homeHandlers.reset}
				/>

				<button
					className={style.resetButton}
					onClick={homeHandlers.handleClick}
				>
					Reset All Filters
				</button>
			</div>

			<Pagination />
			<Cards allDogs={pagination.currentPageDogs} />
			<Pagination />
		</div>
	)
}

export default Home
