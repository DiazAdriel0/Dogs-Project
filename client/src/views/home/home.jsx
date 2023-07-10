import style from './home.module.css'
import Nav from './../../components/nav/nav'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
	getAllDogs,
	getTemperaments,
	filterByTemperament,
	orderDogs,
} from '../../redux/actions/actions'
import SelectDropdown from '../../components/selectDropdown/selectDropdown'
import SearchBar from '../../components/searchBar/searchBar'

const Home = () => {
	const dispatch = useDispatch()

	const [selectedTemperaments, setSelectedTemperaments] = useState([])
	const [selectedOrder, setSelectedOrder] = useState('')
	const [firstLoad, setFirstLoad] = useState(true)

	const allTemperaments = useSelector(state => state.allTemperaments)
	const allDogs = useSelector(state => state.allDogs)

	useEffect(() => {
		if (firstLoad) {
			dispatch(getTemperaments())
			dispatch(getAllDogs())
			setFirstLoad(false)
		}
		dispatch(filterByTemperament(selectedTemperaments))
		dispatch(orderDogs(selectedOrder)) // The order remains even when temperament filters are removed
	}, [selectedTemperaments])

	const handleTemperamentChange = selected => {
		setSelectedTemperaments(selected.map(option => option.value))
	}

	const handleOrder = selected => {
		if (selected.length) {
			const { value } = selected[0]
			dispatch(orderDogs(value))
			setSelectedOrder(value)
		}
	}

	return (
		<div className={style.containerHome}>
			<Nav />
			<h1>Home</h1>
			<SearchBar />
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
				onChange={handleOrder}
			/>
			<SelectDropdown
				options={allTemperaments.map(temperament => ({
					value: temperament,
					label: temperament,
				}))}
				multi={true}
				clearable
				placeholder='Temperaments'
				onChange={handleTemperamentChange}
			/>
			<Cards allDogs={allDogs} />
		</div>
	)
}

export default Home
