export const filterByTemp = (allDogs, temperaments) => {
	const filteredDogs = []

	allDogs.forEach(dog => {
		let check = false

		if (dog.temperament) {
			for (let i = 0; i < temperaments.length; i++) {
				const filter = temperaments[i]
				if (dog.temperament.includes(filter)) {
					check = true
				} else {
					check = false
					break
				}
			}
		}

		if (check) filteredDogs.push(dog)
	})
	// VER
	if (!filteredDogs.length)
		throw new Error('No breed matching for these filters')

	return filteredDogs
}

export const filterByName = (allDogs, dogsFilteredByName) => {
	const filteredDogs = allDogs.filter(dog =>
		dogsFilteredByName.some(dogFiltered => dogFiltered.name === dog.name),
	)
	if (!filteredDogs.length)
		throw new Error(
			'No breed matching with your search was found for these filters',
		)

	return filteredDogs
}

export const filterMaster = (allDogsCopy, selectedFilters) => {
	const selectedTemperaments = selectedFilters[0].map(
		selected => selected.value,
	)
	const selectedOrigin = selectedFilters[1][0]?.value
	let filteredDogsByTemp = []
	let filteredDogsByOrigin = []

	if (selectedTemperaments.length) {
		allDogsCopy.forEach(dog => {
			let check = false

			if (dog.temperament) {
				for (let i = 0; i < selectedTemperaments.length; i++) {
					const filter = selectedTemperaments[i]
					if (dog.temperament.includes(filter)) {
						check = true
					} else {
						check = false
						break
					}
				}
			}

			if (check) filteredDogsByTemp.push(dog)
		})
	} else {
		filteredDogsByTemp = allDogsCopy
	}

	if (selectedOrigin) {
		if (selectedOrigin === 'Only API Dogs') {
			filteredDogsByOrigin = filteredDogsByTemp.filter(dog => !isNaN(dog.id))
		} else {
			filteredDogsByOrigin = filteredDogsByTemp.filter(dog => isNaN(dog.id))
		}

		if (!filteredDogsByOrigin.length) {
			throw new Error('No dogs were found based on the selected filters')
		}
	}

	return filteredDogsByOrigin.length ? filteredDogsByOrigin : filteredDogsByTemp
}
