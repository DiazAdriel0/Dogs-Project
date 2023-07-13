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

	return filteredDogs
}

export const filterByName = (allDogs, dogsFilteredByName) => {
	const filteredDogs = allDogs.filter(dog =>
		dogsFilteredByName.some(dogFiltered => dogFiltered.name === dog.name),
	)
	if (!filteredDogs.length)
		alert('No breed matching with your search was found for these filters')

	return filteredDogs
}
