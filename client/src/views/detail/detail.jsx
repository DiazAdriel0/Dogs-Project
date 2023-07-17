/* eslint-disable camelcase */
import style from './detail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Detail = () => {
	const [dog, setDog] = useState({})
	const [error, setError] = useState(false)
	const { id } = useParams()

	const request = async () => {
		try {
			const { data } = await axios(`http://localhost:3001/dogs/${id}`)
			setDog(data)
		} catch (error) {
			setError(true)
			alert('No breed matches the searched id')
		}
	}

	useEffect(() => {
		request()
	}, [])

	const {
		name,
		image,
		weight,
		height,
		bred_for,
		breed_group,
		life_span,
		temperament,
		origin,
	} = dog

	return (
		<>
			{dog.name && (
				<div className={style.containerDetail}>
					<div className={style.imageContainer}>
						<img
							className={style.image}
							src={image?.url}
							alt={`${dog.name} image`}
						/>
					</div>
					<div className={style.infoContainer}>
						<h3 className={style.name}>{name}</h3>
						<div>
							{weight?.imperial && <h5>Imperial Weight: {weight?.imperial}</h5>}
							{weight?.metric && <h5>Metric Weight: {weight?.metric}</h5>}
						</div>
						<div>
							{height?.imperial && <h5>Imperial Height: {height?.imperial}</h5>}
							{height?.metric && <h5>Metric height: {height?.metric}</h5>}
						</div>
						{bred_for && <h5>Bred For: {bred_for}</h5>}
						{breed_group && <h5>Breed Group: {breed_group}</h5>}
						{life_span && <h5>Life Span: {life_span}</h5>}
						{temperament && <h5>Temperaments: {temperament}</h5>}
						{origin && <h5>Origin: {origin}</h5>}
					</div>
				</div>
			)}
			{error && <p>Error</p>}
		</>
	)
}

export default Detail
