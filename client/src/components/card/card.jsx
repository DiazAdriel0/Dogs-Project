import style from './card.module.css'
import { Link } from 'react-router-dom'

const Card = props => {
	const { dog } = props
	return (
		<div className={style.container}>
			<div className={style.card}>
				<div className={style.cardHead}>
					<div className={style.animalDetail}>
						<h2>{dog.name}</h2>
						<div className={style.circleWrapper}>
							{/* agregado */}
							<Link to={`/detail/${dog.id}`}>
								<img
									src={dog.image?.url}
									alt={`${dog.name} image`}
									className={style.animalImg}
								/>
							</Link>
						</div>
						{/* agregado */}
					</div>
				</div>
				<div className={style.cardBody}>
					<div className={style.animalInfo}>
						<h4>Weight</h4>
						<ul>
							<li>
								<span className={style.labels}>Imperial Weight: </span>
								{dog.weight?.imperial}
							</li>
							<li>
								<span className={style.labels}>Metric Weight: </span>
								{dog.weight?.metric}
							</li>
						</ul>
					</div>
					<div className={style.animalDescription}>
						<h4>Temperaments: </h4>
						<p>{dog.temperament}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card

/* <div className={style.containerCard}>
			<Link to={`/detail/${dog.id}`}>
				<div className={style.dogImg}>
					<img src={dog.image?.url} alt='dog image' />
				</div>
			</Link>

			<h2>{dog.name}</h2>
			<h2>Imperial Weight: {dog.weight?.imperial}</h2>
			<h2>Metric Weight: {dog.weight?.metric}</h2>
			<h3>Temperament: {dog.temperament}</h3>
		</div>
 */
