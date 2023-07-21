import style from './home.module.css'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllDogs } from '../../redux/actions/actions'
import SearchBar from '../../components/searchBar/searchBar'
import Pagination from '../../components/pagination/pagination'
import useHomeHandlers from '../../hooks/useHomeHandlers'
import useOptions from '../../hooks/useOptions'
import usePagination from '../../hooks/usePagination'
import SelectMaster from '../../components/Select/select'
import Loading from '../../components/loading/loading'

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

	const [reset, setReset] = useState(false)

	useEffect(() => {}, [])

	useEffect(() => {
		setReset(false)
	}, [reset])

	useEffect(() => {
		console.log('SE MONTA EL COMPONENTE')
		if (!allDogs.length) dispatch(getAllDogs())
	}, [])

	const handleReset = () => {
		setReset(true)
	}

	return (
		<>
			{!allDogs.length ? (
				<Loading />
			) : (
				<div className={style.containerHome}>
					<div className={style.filters}>
						<SearchBar />

						{!reset && (
							<>
								<SelectMaster
									className={style.orderSelect}
									options={options.orderOptions}
									multi={false}
									values={selectedOrder}
									onChange={homeHandlers.handleOrderChange}
									placeholder='Order Dogs'
									reset={homeHandlers.reset}
								/>

								<SelectMaster
									className={style.originSelect}
									options={options.originOptions}
									multi={false}
									values={selectedOrigin}
									onChange={homeHandlers.handleFromChange}
									placeholder='Origin of Dogs'
									reset={homeHandlers.reset}
								/>

								<SelectMaster
									className={style.temperamentsSelect}
									options={options.temperamentsOptions}
									multi={true}
									values={selectedTemperaments}
									onChange={homeHandlers.handleTemperamentChange}
									placeholder='Temperaments'
									reset={homeHandlers.reset}
								/>
							</>
						)}

						<button
							className={style.resetButton}
							onClick={homeHandlers.handleClick}
						>
							Reset All Filters
						</button>
					</div>

					<Pagination />
					<Cards allDogs={pagination.currentPageDogs} onReset={handleReset} />
					<Pagination />
				</div>
			)}
		</>
	)
}

export default Home
