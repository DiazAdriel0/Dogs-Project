export const ascendingOrder = (array, orderId) => {
	if (orderId === 'name') {
		return array.sort((a, b) => {
			if (a.name > b.name) return 1
			if (a.name < b.name) return -1
			return 0
		})
	} else if (orderId === 'weight') {
		return array.sort((a, b) => {
			const [minA] = a.weight?.imperial.split(/\s*-\s*|\s*–\s*/).map(Number)
			const [minB] = b.weight?.imperial.split(/\s*-\s*|\s*–\s*/).map(Number)

			if (isNaN(minA)) {
				return 1 // Move NaN elements to the end of the array
			}
			if (isNaN(minB)) {
				return -1 // Move NaN elements to the end of the array
			}

			return minA - minB
		})
	}
}

export const descendingOrder = (array, orderId) => {
	if (orderId === 'name') {
		return array.sort((a, b) => {
			if (a.name > b.name) return -1
			if (a.name < b.name) return 1
			return 0
		})
	} else if (orderId === 'weight') {
		return array.sort((a, b) => {
			const [minA] = a.weight?.imperial.split(/\s*-\s*|\s*–\s*/).map(Number)
			const [minB] = b.weight?.imperial.split(/\s*-\s*|\s*–\s*/).map(Number)

			if (isNaN(minA)) {
				return 1 // Move NaN elements to the end of the array
			}
			if (isNaN(minB)) {
				return -1 // Move NaN elements to the end of the array
			}

			return minB - minA
		})
	}
}
