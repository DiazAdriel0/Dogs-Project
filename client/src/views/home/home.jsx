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

	const allTemperaments = useSelector(state => state.allTemperaments)
	const allDogs = useSelector(state => state.allDogs)
	const change = useSelector(state => state.change)

	useEffect(() => {
		if (!allDogs.length || !allTemperaments.length) {
			dispatch(getAllDogs())
			dispatch(getTemperaments())
		}
	}, [change])

	useEffect(() => {
		dispatch(filterByTemperament(selectedTemperaments))
	}, [selectedTemperaments])

	const handleTemperamentChange = selected => {
		setSelectedTemperaments(selected.map(option => option.value))
	}

	const handleOrderChange = event => {
		const { value } = event.target
		dispatch(orderDogs(value))
	}

	return (
		<div className={style.containerHome}>
			<Nav />
			<h1>Home</h1>
			<select defaultValue='default' onChange={handleOrderChange}>
				<option value='default' disabled>
					Order Dogs
				</option>
				<option value='A-Z'>A - Z</option>
				<option value='Z-A'>Z - A</option>
				<option value='AscWeight'>Ascending Weight</option>
				<option value='DescWeight'>Descending Weight</option>
			</select>

			<SearchBar />
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
