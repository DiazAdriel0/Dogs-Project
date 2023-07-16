import style from './create.module.css'
import Select from 'react-dropdown-select'
import useOptions from './../../hooks/useOptions'
import useFormHandlers from './utils/useFormHandlers'

const Create = () => {
	const options = useOptions()

	const {
		selectedTemps,
		inputs,
		errors,
		disabledSubmit,
		handleChange,
		handleTemperamentChange,
		handleSubmit,
	} = useFormHandlers()

	return (
		<div className={style.containerCreate}>
			<h1>Create Form</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Breed Name<span>*</span>
				</label>
				<input
					value={inputs.name}
					name='name'
					type='text'
					placeholder='Name'
					onChange={handleChange}
				></input>
				{errors.name ? <span>{errors.name}</span> : <span></span>}

				<label>
					Image<span>*</span>
				</label>
				<input
					value={inputs.imageUrl}
					name='imageUrl'
					type='text'
					placeholder='Image URL'
					onChange={handleChange}
				></input>
				{errors.imageUrl ? <span>{errors.imageUrl}</span> : <span></span>}

				<label>
					Minimum Height<span>*</span>
				</label>
				<input
					value={inputs.minImperialHeight}
					name='minImperialHeight'
					type='number'
					placeholder='Min Height (Imperial)'
					onChange={handleChange}
				></input>
				<label>
					Maximum Height<span>*</span>
				</label>
				<input
					value={inputs.maxImperialHeight}
					name='maxImperialHeight'
					type='number'
					placeholder='Max Height (Imperial)'
					onChange={handleChange}
				></input>
				{errors.imperialHeight ? (
					<span>{errors.imperialHeight}</span>
				) : (
					<span></span>
				)}

				<label>
					Minimum Weight<span>*</span>
				</label>
				<input
					value={inputs.minImperialWeight}
					name='minImperialWeight'
					type='number'
					placeholder='Min Weight (Imperial)'
					onChange={handleChange}
				></input>
				<label>
					Maximum Weight<span>*</span>
				</label>
				<input
					value={inputs.maxImperialWeight}
					name='maxImperialWeight'
					type='number'
					placeholder='Max Weight (Imperial)'
					onChange={handleChange}
				></input>
				{errors.imperialWeight ? (
					<span>{errors.imperialWeight}</span>
				) : (
					<span></span>
				)}

				<label>
					Minimum Life Expectancy<span>*</span>
				</label>
				<input
					value={inputs.minLifeSpan}
					name='minLifeSpan'
					type='number'
					placeholder='Min Life Span (years)'
					onChange={handleChange}
				></input>
				<label>
					Maximum Life Expectancy<span>*</span>
				</label>
				<input
					value={inputs.maxLifeSpan}
					name='maxLifeSpan'
					type='number'
					placeholder='Max Life Span (years)'
					onChange={handleChange}
				></input>
				{errors.lifeSpan ? <span>{errors.lifeSpan}</span> : <span></span>}

				<label>
					Temperaments<span>*</span>
				</label>
				<Select
					className={style.temperamentsSelect}
					options={options?.temperamentsOptions}
					name='temperamentsSelect'
					values={selectedTemps}
					onChange={handleTemperamentChange}
					multi
					clearable
					placeholder='Temperaments'
					closeOnSelect
				/>
				{errors.temperamentsSelect ? (
					<span>{errors.temperamentsSelect}</span>
				) : (
					<span></span>
				)}

				<label>Bred For</label>
				<input
					value={inputs.bred_for}
					name='bred_for'
					type='text'
					placeholder='Bred for'
					onChange={handleChange}
				></input>
				{errors.bred_for ? <span>{errors.bred_for}</span> : <span></span>}

				<label>Breed Group</label>
				<input
					value={inputs.breed_group}
					name='breed_group'
					type='text'
					placeholder='Breed Group'
					onChange={handleChange}
				></input>
				{errors.breed_group ? <span>{errors.breed_group}</span> : <span></span>}

				<label>Origin</label>
				<input
					value={inputs.origin}
					name='origin'
					type='text'
					placeholder='Origin'
					onChange={handleChange}
				></input>
				{errors.origin ? <span>{errors.origin}</span> : <span></span>}

				{errors.emptyInputs ? <span>{errors.emptyInputs}</span> : <span></span>}

				<button type='submit' disabled={disabledSubmit}>
					Create
				</button>
			</form>
		</div>
	)
}

export default Create
