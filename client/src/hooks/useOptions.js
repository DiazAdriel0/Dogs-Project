import { useSelector } from 'react-redux'

const useOptions = () => {
	const allTemperaments = useSelector(state => state.allTemperaments)

	const originOptions = [
		{ value: 'Only API Dogs', label: 'Only API Dogs' },
		{ value: 'Only Created Dogs', label: 'Only Created Dogs' },
	]

	const orderOptions = [
		{ value: 'A - Z', label: 'A - Z' },
		{ value: 'Z - A', label: 'Z - A' },
		{ value: 'Ascending Weight', label: 'Ascending Weight' },
		{ value: 'Descending Weight', label: 'Descending Weight' },
	]

	const temperamentsOptions = allTemperaments.map(temperament => ({
		value: temperament,
		label: temperament,
	}))

	return { originOptions, orderOptions, temperamentsOptions }
}

export default useOptions
