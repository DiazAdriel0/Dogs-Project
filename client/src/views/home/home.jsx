import style from './home.module.css'
import Nav from './../../components/nav/nav'
import Cards from '../../components/cards/cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
	getAllDogs,
	getTemperaments,
	filterByTemperament,
} from '../../redux/actions/actions'
import Dropdown from 'react-dropdown-select'

const Home = () => {
	const [selectedTemperaments, setSelectedTemperaments] = useState([])

	const dispatch = useDispatch()

	const allDogs = useSelector(state => state.allDogs)

	const allTemperaments = useSelector(state => state.allTemperaments)

	const filteredByTemp = useSelector(state => state.filteredByTemp)

	useEffect(() => {
		dispatch(getAllDogs())
		dispatch(getTemperaments())
	}, [])

	useEffect(() => {
		dispatch(filterByTemperament(selectedTemperaments.join(',')))
	}, [selectedTemperaments])

	const handleTemperamentChange = selected => {
		setSelectedTemperaments(selected.map(option => option.value))
	}

	return (
		<div className={style.containerHome}>
			<Nav />
			<Dropdown
				options={allTemperaments.map(temperament => ({
					value: temperament,
					label: temperament,
				}))}
				multi
				clearable
				placeholder='Temperaments'
				onChange={handleTemperamentChange}
			/>
			<h1>Home</h1>
			{selectedTemperaments.length ? (
				<Cards dogs={filteredByTemp} />
			) : (
				<Cards dogs={allDogs} />
			)}
		</div>
	)
}

export default Home
