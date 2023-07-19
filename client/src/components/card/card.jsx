import style from './card.module.css'
import { Link } from 'react-router-dom'
import useHomeHandlers from './../../hooks/useHomeHandlers'

const Card = props => {
	const { dog, onReset } = props
	const { handleDelete } = useHomeHandlers()
	return (
		<div className={style.container}>
			<div className={style.card}>
				<div className={style.cardHead}>
					<div className={style.animalDetail}>
						<h2>{dog.name}</h2>
						<div className={style.circleWrapper}>
							<Link to={`/detail/${dog.id}`}>
								<img
									src={dog.image?.url}
									alt={`${dog.name} image`}
									className={style.animalImg}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className={style.cardBody}>
					<div>
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
					{typeof dog.id !== 'number' && (
						<div className={style.deleteButtonContainer}>
							<button
								className={style.deleteButton}
								onClick={() => {
									handleDelete(dog.id, dog.name)
									onReset()
								}}
							>
								Delete Dog
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
