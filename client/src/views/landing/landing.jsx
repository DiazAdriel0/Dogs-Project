import style from './landing.module.css'
import Background from './background/background'
import { useEffect, useState } from 'react'

const Landing = () => {
	const [timer, setTimer] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setTimer(true)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={style.containerLanding}>
			<Background />
			<h1 className={style.title}>The Amazing World of Dogs!</h1>
			<span className={`${style.spanClick} ${timer && style.visible}`}>
				Click on the dog
			</span>
		</div>
	)
}

export default Landing
