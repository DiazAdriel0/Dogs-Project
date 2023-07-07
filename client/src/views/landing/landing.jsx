import style from './landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<div className={style.containerLanding}>
			<Link to='/home'>
				<button>Home</button>
			</Link>
		</div>
	)
}

export default Landing
