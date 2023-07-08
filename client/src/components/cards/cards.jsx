import Card from '../card/card'
import style from './cards.module.css'

const Cards = props => {
	const { dogs } = props
	return (
		<div className={style.containerCards}>
			{dogs.map(dog => (
				<Card key={dog.id} dog={dog} />
			))}
		</div>
	)
}

export default Cards
