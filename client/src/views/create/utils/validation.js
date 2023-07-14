const validation = inputs => {
	let errors = {}
	const nameRegex = /^[a-zA-Z]{3,}$/
	const heightRegex = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/
	const weightRegex = /^(?:[1-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-4][0-9]|350)$/
	const lifeSpanRegex = /^(?:[1-9]|1[0-9]|2[0-5])$/
	const temperamentsRegex = /^(\w+,\s)+\w+$/

	if (inputs.name && !nameRegex.test(inputs.name))
		errors = {
			...errors,
			name: 'Minimum 2 characters, cannot contain numbers or symbols',
		}

	if (
		(inputs.minImperialHeight || inputs.maxImperialHeight) &&
		(!heightRegex.test(inputs.minImperialHeight) ||
			!heightRegex.test(inputs.maxImperialHeight))
	)
		errors = {
			...errors,
			imperialHeight: 'The height must be between 1 and 45',
		}
	else if (Number(inputs.minImperialHeight) > Number(inputs.maxImperialHeight))
		errors = {
			...errors,
			imperialHeight:
				'The minimum value cannot be greater than the maximum value',
		}

	if (
		(inputs.minImperialWeight || inputs.maxImperialWeight) &&
		(!weightRegex.test(inputs.minImperialWeight) ||
			!weightRegex.test(inputs.maxImperialWeight))
	)
		errors = {
			...errors,
			imperialWeight: 'The weight must be between 1 and 350',
		}
	else if (Number(inputs.minImperialWeight) > Number(inputs.maxImperialWeight))
		errors = {
			...errors,
			imperialWeight:
				'The minimum value cannot be greater than the maximum value',
		}

	if (
		(inputs.minLifeSpan || inputs.maxLifeSpan) &&
		(!lifeSpanRegex.test(inputs.minLifeSpan) ||
			!lifeSpanRegex.test(inputs.maxLifeSpan))
	)
		errors = {
			...errors,
			lifeSpan: 'The life span must be between 1 and 25',
		}
	else if (Number(inputs.minLifeSpan) > Number(inputs.maxLifeSpan))
		errors = {
			...errors,
			lifeSpan: 'The minimum value cannot be greater than the maximum value',
		}

	if (
		inputs.temperamentsSelect &&
		!temperamentsRegex.test(inputs.temperamentsSelect)
	)
		errors = {
			...errors,
			temperamentsSelect: 'You must select at least 2 temperaments',
		}

	return errors
}

export default validation
