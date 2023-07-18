import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useHomeHandlers from '../../../hooks/useHomeHandlers'
import axios from 'axios'

const useDetailFunctions = () => {
	const [dog, setDog] = useState({})
	const [error, setError] = useState(false)
	const [addTempermanet, setAddTemperament] = useState(false)
	const [selectedTemp, setSelectedTemp] = useState([])
	const { id } = useParams()
	const homeHandlers = useHomeHandlers()

	const request = async () => {
		try {
			const { data } = await axios(`http://localhost:3001/dogs/${id}`)
			setDog(data)
		} catch (error) {
			setError(true)
			alert('No breed matches the searched id')
		}
	}

	useEffect(() => {
		request()
	}, [])

	const handleChange = selected => {
		if (selected.length) {
			const temperamentSlected = selected[0].value
			setSelectedTemp(temperamentSlected)
		} else {
			setSelectedTemp([])
		}
	}

	const handleAddTempClick = () => {
		const countTemperaments = dog.temperament.split(',').length
		if (countTemperaments < 10) setAddTemperament(true)
		else alert('Each dog can only have 10 temperaments')
	}

	const handleClick = () => {
		const put = async () => {
			try {
				if (selectedTemp.length) {
					await axios.put(`http://localhost:3001/dogs/${id}`, {
						temperament: selectedTemp,
					})
				} else {
					throw new Error('You must select a temperament')
				}
				setSelectedTemp([])
				setDog({ ...dog, temperament: `${dog.temperament}, ${selectedTemp}` })
				setAddTemperament(false)
				homeHandlers.handleClick()
				alert('Temperament added successfully')
			} catch (error) {
				alert(error.message)
			}
		}
		put()
	}

	return {
		dog,
		error,
		addTempermanet,
		selectedTemp,
		handleAddTempClick,
		setAddTemperament,
		handleChange,
		handleClick,
	}
}

export default useDetailFunctions
