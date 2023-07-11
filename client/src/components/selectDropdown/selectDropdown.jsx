import Dropdown from 'react-dropdown-select'

const SelectDropdown = props => {
	const { options, onChange, placeholder, multi, closeOnSelect, values } = props

	/* // Handlers
	const handleChange (selected)

	const handleTemperamentChange = selected => {
		const selectedArray = selected.map(option => option.value)
		dispatch(setSelectedTemperaments(selectedArray))
	}
	const handleOrderChange = selected => {
		// If the 'selected' array has no length, the app crashes
		if (selected.length) {
			const { value } = selected[0]
			dispatch(orderDogs(value))
			setSelectedOrder(value)
		}
	} */

	return (
		<Dropdown
			options={options}
			multi={multi}
			clearable
			onChange={onChange}
			placeholder={placeholder}
			closeOnSelect={closeOnSelect}
			values={values}
		/>
	)
}

export default SelectDropdown
