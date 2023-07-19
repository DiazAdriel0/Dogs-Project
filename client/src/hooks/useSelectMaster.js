import { useState, useEffect } from 'react'

const useSelectMaster = ({ options, values, onChange, multi, reset }) => {
	const [filteredOptions, setFilteredOptions] = useState(options)
	const [inputValue, setInputValue] = useState('')
	const [selectedValues, setSelectedValues] = useState(values)
	const [defaultValue, setDefaultValue] = useState('')
	const [aux, setAux] = useState(true)

	useEffect(() => {
		const optionsFiltered = options.filter(option =>
			option.value.toLowerCase().includes(inputValue.toLowerCase()),
		)
		setFilteredOptions(optionsFiltered)
	}, [inputValue])

	useEffect(() => {
		setFilteredOptions(options)
	}, [])

	useEffect(() => {
		if (reset) {
			setSelectedValues([])
			setDefaultValue('')
		}
	}, [reset])

	useEffect(() => {
		try {
			onChange(selectedValues)
		} catch (error) {
			alert(error.message)
			const selectedValuesSlice = selectedValues.slice(
				0,
				selectedValues.length - 1,
			)
			setSelectedValues(selectedValuesSlice)
			onChange(selectedValuesSlice)
		}
	}, [aux])

	const handleInputChange = event => {
		setInputValue(event.target.value)
	}

	const handleClose = () => {
		setSelectedValues([])
		setInputValue('')
		setAux(!aux)
	}

	const handleCloseOption = (event, value) => {
		const filteredSelectedValues = selectedValues.filter(
			option => option.value !== value,
		)
		setSelectedValues(filteredSelectedValues)
		setAux(!aux)
	}

	const handleChange = event => {
		const { value } = event.target
		const repetadValue = selectedValues.find(
			selected => selected.value === value,
		)

		if (!repetadValue) {
			if (multi) {
				setSelectedValues([...selectedValues, { value, label: value }])
				setInputValue('')
			} else {
				setSelectedValues([{ value, label: value }])
			}
		}
		setAux(!aux)
	}

	return {
		filteredOptions,
		inputValue,
		selectedValues,
		defaultValue,
		handleInputChange,
		handleClose,
		handleCloseOption,
		handleChange,
	}
}

export default useSelectMaster
