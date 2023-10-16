import { Link } from 'react-router-dom'
import style from './nav.module.css'
import homeLogo from './../../assets/home-paw2png.png'

const Nav = () => {
	return (
		<div className={style.containerNav}>
			<div className={style.containerLinks}>
				<Link className={style.link} to='/home'>
					<img className={style.homeLogo} src={homeLogo} alt='home logo'></img>
				</Link>

				<Link className={style.link} to='/create'>
					CREATE
				</Link>

				<Link className={style.link} to='/about'>
					ABOUT ME
				</Link>
			</div>
		</div>
	)
}

export default Nav
