import { Link } from 'react-router-dom'
import style from './background.module.css'

const Background = () => {
	return (
		<div className={style.dog}>
			<div className={style.ears}></div>
			<Link to='/home'>
				<div className={style.body}>
					<div className={style.eyes}></div>
					<div className={style.beard}>
						<div className={style.mouth}>
							<div className={style.tongue}></div>
						</div>
					</div>
					<div className={style.belt}>
						<div className={style.locket}></div>
						<div className={(style.dot, style.dot1)}></div>
						<div className={(style.dot, style.dot2)}></div>
						<div className={(style.dot, style.dot3)}></div>
						<div className={(style.dot, style.dot4)}></div>
						<div className={style.tag}></div>
					</div>
					<div className={style.stomach}></div>
					<div className={style.legs}>
						<div className={style.left}></div>
						<div className={style.right}></div>
					</div>
				</div>
			</Link>
			<div className={style.tail}></div>
		</div>
	)
}

export default Background
