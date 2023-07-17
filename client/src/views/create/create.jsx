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

			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.inputs}>
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
				</div>
				<div className={style.errors}>
					{errors.name ? <span>{errors.name}</span> : <span></span>}
				</div>

				<div className={style.inputs}>
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
				</div>
				<div className={style.errors}>
					{errors.imageUrl ? <span>{errors.imageUrl}</span> : <span></span>}
				</div>

				<div className={style.inputs}>
					<div>
						<label>
							Minimum Height<span>*</span>
						</label>
						<input
							value={inputs.minImperialHeight}
							name='minImperialHeight'
							type='number'
							placeholder='Min Height (Inches)'
							onChange={handleChange}
						></input>
					</div>
					<div>
						<label>
							Maximum Height<span>*</span>
						</label>
						<input
							value={inputs.maxImperialHeight}
							name='maxImperialHeight'
							type='number'
							placeholder='Max Height (Inches)'
							onChange={handleChange}
						></input>
					</div>
				</div>
				<div className={style.errors}>
					{errors.imperialHeight ? (
						<span>{errors.imperialHeight}</span>
					) : (
						<span></span>
					)}
				</div>

				<div className={style.inputs}>
					<div>
						<label>
							Minimum Weight<span>*</span>
						</label>
						<input
							value={inputs.minImperialWeight}
							name='minImperialWeight'
							type='number'
							placeholder='Min Weight (Lbs)'
							onChange={handleChange}
						></input>
					</div>
					<div>
						<label>
							Maximum Weight<span>*</span>
						</label>
						<input
							value={inputs.maxImperialWeight}
							name='maxImperialWeight'
							type='number'
							placeholder='Max Weight (Lbs)'
							onChange={handleChange}
						></input>
					</div>
				</div>
				<div className={style.errors}>
					{errors.imperialWeight ? (
						<span>{errors.imperialWeight}</span>
					) : (
						<span></span>
					)}
				</div>

				<div className={style.inputs}>
					<div>
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
					</div>
					<div>
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
					</div>
				</div>
				<div className={style.errors}>
					{errors.lifeSpan ? <span>{errors.lifeSpan}</span> : <span></span>}
				</div>

				<div className={style.temperaments}>
					<label className={style.temperamentsLabel}>
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
				</div>
				<div className={style.errors}>
					{errors.temperamentsSelect ? (
						<span>{errors.temperamentsSelect}</span>
					) : (
						<span></span>
					)}
				</div>

				<div className={style.inputs}>
					<label>Bred For</label>
					<input
						value={inputs.bred_for}
						name='bred_for'
						type='text'
						placeholder='Bred for'
						onChange={handleChange}
					></input>
				</div>
				<div className={style.errors}>
					{errors.bred_for ? <span>{errors.bred_for}</span> : <span></span>}
				</div>

				<div className={style.inputs}>
					<label>Breed Group</label>
					<input
						value={inputs.breed_group}
						name='breed_group'
						type='text'
						placeholder='Breed Group'
						onChange={handleChange}
					></input>
				</div>
				<div className={style.errors}>
					{errors.breed_group ? (
						<span>{errors.breed_group}</span>
					) : (
						<span></span>
					)}
				</div>

				<div className={style.inputs}>
					<label>Origin</label>
					<input
						value={inputs.origin}
						name='origin'
						type='text'
						placeholder='Origin'
						onChange={handleChange}
					></input>
				</div>
				<div className={style.errors}>
					{errors.origin ? <span>{errors.origin}</span> : <span></span>}
				</div>

				<div className={style.errors}>
					{errors.emptyInputs ? (
						<span>{errors.emptyInputs}</span>
					) : (
						<span></span>
					)}
				</div>
				<div>
					{disabledSubmit && (
						<p className={style.requiredMessage}>
							Fields marked with * are required
						</p>
					)}
					<button type='submit' disabled={disabledSubmit}>
						Create
					</button>
				</div>
			</form>
		</div>
	)
}

export default Create
