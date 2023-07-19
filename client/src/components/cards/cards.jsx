import Card from '../card/card'
import style from './cards.module.css'

const Cards = ({ allDogs, onReset }) => {
	return (
		<div className={style.containerCards}>
			{allDogs.map(dog => (
				<Card key={dog.id} dog={dog} onReset={onReset} />
			))}
		</div>
	)
}

export default Cards
