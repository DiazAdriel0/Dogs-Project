import { useState } from 'react'
import validation from './validation'

const useInputsAndErrors = () => {
	// Local States
	const [selectedTemps, setSelectedTemps] = useState([])

	const [inputs, setInputs] = useState({
		name: '',
		minImperialHeight: '',
		maxImperialHeight: '',
		minImperialWeight: '',
		maxImperialWeight: '',
		minLifeSpan: '',
		maxLifeSpan: '',
		temperamentsSelect: '',
	})

	const [errors, setErrors] = useState({
		name: '',
		imperialHeight: '',
		imperialWeight: '',
		lifeSpan: '',
		temperamentsSelect: '',
		emptyInputs: '',
	})

	// Handlers
	const handleChange = event => {
		const { value, name } = event.target
		setInputs({
			...inputs,
			[name]: value,
		})
		setErrors(
			validation({
				...inputs,
				[name]: value,
			}),
		)
	}

	const handleTemperamentChange = selected => {
		setSelectedTemps(selected)
		if (selected.length) {
			const selectedString = selected.map(option => option.value).join(', ')
			setInputs({
				...inputs,
				temperamentsSelect: selectedString,
			})
			setErrors(
				validation({
					...inputs,
					temperamentsSelect: selectedString,
				}),
			)
		} else {
			setInputs({
				...inputs,
				temperamentsSelect: '',
			})
			setErrors(
				validation({
					...inputs,
					temperamentsSelect: '',
				}),
			)
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		const areInputsEmpty = Object.values(inputs).every(value => !value)
		const areErrorsEmpty = Object.values(errors).every(value => !value)

		if (areInputsEmpty || inputs.temperamentsSelect === '') {
			setErrors({
				...errors,
				emptyInputs: "There can't be empty fields",
			})
			alert("There can't be empty fields")
		} else if (areErrorsEmpty) {
			console.log(inputs.temperamentsSelect)
			setInputs({
				name: '',
				minImperialHeight: '',
				maxImperialHeight: '',
				minImperialWeight: '',
				maxImperialWeight: '',
				minLifeSpan: '',
				maxLifeSpan: '',
				temperamentsSelect: '',
			})
			setSelectedTemps([])

			alert('Success created')
		} else {
			alert(
				'Invalid entries for creation, make sure to fill in all fields and ensure they are error-free',
			)
		}
	}

	return {
		selectedTemps,
		inputs,
		errors,
		handleChange,
		handleTemperamentChange,
		handleSubmit,
	}
}

export default useInputsAndErrors
