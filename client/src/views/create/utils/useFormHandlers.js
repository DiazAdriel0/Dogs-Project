/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import validation from './validation'
import axios from 'axios'
import useHomeHandlers from '../../../hooks/useHomeHandlers'

const useFormHandlers = () => {
	// Local States
	const [allDogs, setAllDogs] = useState([])
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
		imageUrl: '',
		bred_for: '',
		breed_group: '',
		origin: '',
	})
	const [errors, setErrors] = useState({
		name: '',
		imperialHeight: '',
		imperialWeight: '',
		lifeSpan: '',
		temperamentsSelect: '',
		imageUrl: '',
		bred_for: '',
		breed_group: '',
		origin: '',
	})
	const [disabledSubmit, setDisabledSubmit] = useState(true)
	const homeHandlers = useHomeHandlers()

	useEffect(() => {
		const getDogs = async () => {
			try {
				const { data } = await axios('http://localhost:3001/dogs')
				setAllDogs(data)
			} catch (error) {
				alert(error.message)
			}
		}
		getDogs()
	}, [])

	useEffect(() => {
		const requiredInputs = {
			name: inputs.name && !errors.name,
			minImperialHeight: inputs.minImperialHeight && !errors.imperialHeight,
			maxImperialHeight: inputs.maxImperialHeight && !errors.imperialHeight,
			minImperialWeight: inputs.minImperialWeight && !errors.imperialWeight,
			maxImperialWeight: inputs.maxImperialWeight && !errors.imperialWeight,
			minLifeSpan: inputs.minLifeSpan && !errors.lifeSpan,
			maxLifeSpan: inputs.maxLifeSpan && !errors.lifeSpan,
			temperamentsSelect:
				inputs.temperamentsSelect && !errors.temperamentsSelect,
			imageUrl: inputs.imageUrl && !errors.imageUrl,
		}

		const areRequiredInputsEmpty = Object.values(requiredInputs).every(
			value => value,
		)

		if (areRequiredInputsEmpty) {
			setDisabledSubmit(false)
		} else {
			setDisabledSubmit(true)
		}
	}, [inputs, errors])

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

	const handleSubmit = async event => {
		event.preventDefault()
		const {
			name,
			minImperialHeight,
			maxImperialHeight,
			minImperialWeight,
			maxImperialWeight,
			minLifeSpan,
			maxLifeSpan,
			temperamentsSelect,
			imageUrl,
			bred_for,
			breed_group,
			origin,
		} = inputs
		const areErrorsEmpty = Object.values(errors).every(value => !value)

		const allNames = allDogs.map(dog => dog.name.toLowerCase())

		if (areErrorsEmpty && !allNames.includes(name.toLowerCase())) {
			try {
				const postDog = {
					name,
					weight: {
						imperial: `${minImperialWeight} - ${maxImperialWeight}`,
						metric: `${Math.round(minImperialWeight / 2.2046)} - ${Math.round(
							maxImperialWeight / 2.2046,
						)}`,
					},
					height: {
						imperial: `${minImperialHeight} - ${maxImperialHeight}`,
						metric: `${Math.round(minImperialHeight * 2.54)} - ${Math.round(
							maxImperialHeight * 2.54,
						)}`,
					},
					bred_for,
					breed_group,
					life_span: `${minLifeSpan} - ${maxLifeSpan}`,
					temperament: temperamentsSelect,
					origin,
					image: { url: imageUrl },
				}

				const { data } = await axios.post('http://localhost:3001/dogs', postDog)

				setInputs({
					name: '',
					minImperialHeight: '',
					maxImperialHeight: '',
					minImperialWeight: '',
					maxImperialWeight: '',
					minLifeSpan: '',
					maxLifeSpan: '',
					temperamentsSelect: '',
					imageUrl: '',
					bred_for: '',
					breed_group: '',
					origin: '',
				})
				setSelectedTemps([])
				homeHandlers.handleClick()
				alert(`The ${data.name} breed was created successfully`)
			} catch (error) {
				alert(error.message)
			}
		} else {
			if (!areErrorsEmpty) {
				alert(
					'Invalid entries for creation, make sure to fill in all fields and ensure they are error-free',
				)
			} else {
				alert(`The ${name} breed already exists`)
			}
		}
	}

	return {
		selectedTemps,
		inputs,
		errors,
		disabledSubmit,
		handleChange,
		handleTemperamentChange,
		handleSubmit,
	}
}

export default useFormHandlers
