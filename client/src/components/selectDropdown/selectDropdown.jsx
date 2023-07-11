import Dropdown from 'react-dropdown-select'

const SelectDropdown = props => {
	const { options, onChange, placeholder, multi, closeOnSelect } = props

	return (
		<Dropdown
			options={options}
			multi={multi}
			clearable
			onChange={onChange}
			placeholder={placeholder}
			closeOnSelect={closeOnSelect}
		/>
	)
}

export default SelectDropdown
