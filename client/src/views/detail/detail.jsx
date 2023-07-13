/* eslint-disable camelcase */
import style from './detail.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Detail = () => {
	const [dog, setDog] = useState({})
	const { id } = useParams()

	const request = async () => {
		const { data } = await axios(`http://localhost:3001/dogs/${id}`)
		setDog(data)
	}
	request()

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
		<div className={style.containerDetail}>
			<img src={image?.url} alt='dog image' />
			<h3>{name}</h3>
			<h5>Imperial Weight: {weight?.imperial}</h5>
			<h5>Metric Weight: {weight?.metric}</h5>
			<h5>Imperial Height: {height?.imperial}</h5>
			<h5>Metric height: {height?.metric}</h5>
			<h5>Bred For: {bred_for}</h5>
			<h5>Breed Group: {breed_group}</h5>
			<h5>Life Span: {life_span}</h5>
			<h5>Temperaments: {temperament}</h5>
			<h5>Origin: {origin}</h5>
		</div>
	)
}

export default Detail
