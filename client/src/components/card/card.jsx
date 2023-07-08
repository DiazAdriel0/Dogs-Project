import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = props => {
	const { dog } = props
	return (
		<div className={style.containerCard}>
			<div>
				<Link to={`/detail/${dog.id}`}>
					<img src={dog.image?.url} alt='dog image' />
				</Link>
				<h2>{dog.name}</h2>
				<h2>Imperial Weight: {dog.weight?.imperial}</h2>
				<h2>Metric Weight: {dog.weight?.metric}</h2>
				<h3>Temperament: {dog.temperament}</h3>
			</div>
		</div>
	)
}

export default Card
