import { Link } from 'react-router-dom'
import style from './nav.module.css'

const Nav = () => {
	return (
		<div className={style.containerNav}>
			<Link to='/home'>Home</Link>
			<Link to='/create'>Create</Link>
			<h3>NavBar</h3>
		</div>
	)
}

export default Nav
