import style from './searchBar.module.css'

const SearchBar = () => {
	return (
		<div className={style.containerSearchBar}>
			<input type='text'></input>
			<button>Search</button>
		</div>
	)
}

export default SearchBar
