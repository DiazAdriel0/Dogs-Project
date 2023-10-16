import style from './searchBar.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchDogsByName } from '../../redux/actions/actions'

const SearchBar = () => {
	const [search, setSearch] = useState('')

	const dispatch = useDispatch()

	const handleClick = event => {
		event.preventDefault()
		// search dogs on the global state
		dispatch(searchDogsByName(search))
		// reset search input
		setSearch('')
	}

	return (
		<div className={style.containerSearchBar}>
			{/* It is enclosed within a form just so that when the user presses 'ENTER', the search is executed */}
			<form onSubmit={handleClick}>
				<input
					className={style.searchInput}
					type='search'
					placeholder='Breed Search'
					onChange={event => setSearch(event.target.value)}
					value={search}
				/>
				<button className={style.searchButton} type='submit'>
					Search
				</button>
			</form>
		</div>
	)
}

export default SearchBar
