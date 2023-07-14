import style from './create.module.css'
import Select from 'react-dropdown-select'
import useOptions from './../../hooks/useOptions'
import useInputsAndErrors from './utils/useInputsAndErrors'

const Create = () => {
	const options = useOptions()

	const {
		selectedTemps,
		inputs,
		errors,
		handleChange,
		handleTemperamentChange,
		handleSubmit,
	} = useInputsAndErrors()

	return (
		<div className={style.containerCreate}>
			<h1>Create Form</h1>
			<form onSubmit={handleSubmit}>
				<label>Breed Name</label>
				<input
					value={inputs.name}
					name='name'
					type='text'
					placeholder='Name'
					onChange={handleChange}
				></input>
				{errors.name ? <span>{errors.name}</span> : <span></span>}

				<label>Minimum Height</label>
				<input
					value={inputs.minImperialHeight}
					name='minImperialHeight'
					type='number'
					placeholder='Min Height (Imperial)'
					onChange={handleChange}
				></input>
				<label>Maximum Height</label>
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

				<label>Minimum Weight</label>
				<input
					value={inputs.minImperialWeight}
					name='minImperialWeight'
					type='number'
					placeholder='Min Weight (Imperial)'
					onChange={handleChange}
				></input>
				<label>Maximum Weight</label>
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

				<label>Minimum Life Expectancy</label>
				<input
					value={inputs.minLifeSpan}
					name='minLifeSpan'
					type='number'
					placeholder='Min Life Span (years)'
					onChange={handleChange}
				></input>
				<label>Maximum Life Expectancy</label>
				<input
					value={inputs.maxLifeSpan}
					name='maxLifeSpan'
					type='number'
					placeholder='Max Life Span (years)'
					onChange={handleChange}
				></input>
				{errors.lifeSpan ? <span>{errors.lifeSpan}</span> : <span></span>}

				<label>Temperaments</label>
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

				{errors.emptyInputs ? <span>{errors.emptyInputs}</span> : <span></span>}

				<button type='submit'>Create</button>
			</form>
		</div>
	)
}

export default Create
