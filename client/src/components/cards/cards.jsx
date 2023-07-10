// import { useEffect } from 'react'
import Card from '../card/card'
import style from './cards.module.css'
// import { useSelector /* useDispatch */ } from 'react-redux'
// import { getAllDogs } from '../../redux/actions/actions'

const Cards = ({ allDogs }) => {
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(getAllDogs())
	// }, [])

	return (
		<div className={style.containerCards}>
			{allDogs.map(dog => (
				<Card key={dog.id} dog={dog} />
			))}
		</div>
	)
}

export default Cards
