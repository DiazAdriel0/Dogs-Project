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
