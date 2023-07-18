/* eslint-disable camelcase */
import style from './detail.module.css'
import errorImage from './../../assets/dog-poop-icon.png'
import Select from 'react-dropdown-select'
import useOptions from '../../hooks/useOptions'
import useDetailFunctions from './utils/useDetailFunctions'
import { Link } from 'react-router-dom'

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
								<Select
									className={style.temperamentsSelect}
									options={options.temperamentsOptions}
									values={selectedTemp}
									onChange={handleChange}
									clearable
									placeholder='Temperaments'
									closeOnSelect
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
			{error && (
				<div>
					<p>Error</p>
					<img src={errorImage} alt='Error' />
				</div>
			)}
		</>
	)
}

export default Detail
