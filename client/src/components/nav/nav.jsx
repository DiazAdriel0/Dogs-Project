import SearchBar from '../searchBar/searchBar'
import style from './nav.module.css'

const Nav = () => {
	return (
		<div className={style.containerNav}>
			<SearchBar />
		</div>
	)
}

export default Nav
