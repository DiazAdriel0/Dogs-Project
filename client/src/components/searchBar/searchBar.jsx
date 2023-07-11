import style from './searchBar.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchDogsByName } from '../../redux/actions/actions'

const SearchBar = () => {
	const [search, setSearch] = useState('')

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(searchDogsByName(search))
		setSearch('')
	}

	return (
		<div className={style.containerSearchBar}>
			<input
				type='text'
				placeholder='Breed Search'
				onChange={event => setSearch(event.target.value)}
				value={search}
			/>
			<button onClick={handleClick}>Search</button>
		</div>
	)
}

export default SearchBar
