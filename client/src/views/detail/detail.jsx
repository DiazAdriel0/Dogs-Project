/* eslint-disable camelcase */
import style from './detail.module.css'
import SelectMaster from './../../components/Select/select'
import useOptions from '../../hooks/useOptions'
import useDetailFunctions from './utils/useDetailFunctions'
import { Link } from 'react-router-dom'
import Error from '../error/error'

const Detail = () => {
	const options = useOptions()

	const {
		dog,
		error,
		addTempermanet,
		selectedTemp,
		handleAddTempClick,
		handleChange,
		handleClick,
	} = useDetailFunctions()

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
							alt={`${name} image`}
						/>
					</div>
					<div className={style.infoContainer}>
						<Link
							to={`https://www.google.com/search?q=${dog.name}+breed+of+dog`}
							target='_blank'
							className={style.link}
						>
							<h3 className={style.name}>{name}</h3>{' '}
						</Link>
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
						{typeof dog.id !== 'number' && !addTempermanet && (
							<button className={style.button} onClick={handleAddTempClick}>
								Add Temperament
							</button>
						)}
						{addTempermanet && (
							<div>
								<SelectMaster
									className={style.temperamentsSelect}
									options={options.temperamentsOptions}
									values={selectedTemp}
									onChange={handleChange}
									placeholder='Temperaments'
								/>
								<button className={style.button} onClick={handleClick}>
									Add
								</button>
							</div>
						)}
						{origin && <h5>Origin: {origin}</h5>}
					</div>
				</div>
			)}
			{error && <Error />}
		</>
	)
}

export default Detail
