const validation = inputs => {
	let errors = {}
	const nameRegex = /^[A-Z][a-zA-Z]*(?:[ -][a-zA-Z]+)*$/
	const heightRegex = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/
	const weightRegex = /^(?:[1-9]|[1-9][0-9]|[1-2][0-9]{2}|3[0-4][0-9]|350)$/
	const lifeSpanRegex = /^(?:[1-9]|1[0-9]|2[0-5])$/
	const temperamentsRegex = /^(\w+\s*,\s*){1,9}\w+\s*,?$/
	const imageUrlRegex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/
	const bredForRegex = /^.{5,}$/
	const breedGroupRegex = /^.{3,}$/
	const originRegex = /^[^\d,]+\s*,\s*[^\d,]+$/

	if (inputs.name && !nameRegex.test(inputs.name))
		errors = {
			...errors,
			name: 'Minimum 3 characters, cannot contain numbers or symbols, the first character must be uppercase',
		}

	if (
		(inputs.minImperialHeight || inputs.maxImperialHeight) &&
		(!heightRegex.test(inputs.minImperialHeight) ||
			!heightRegex.test(inputs.maxImperialHeight))
	)
		errors = {
			...errors,
			imperialHeight: 'The height must be a integer between 1 and 45',
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
			imperialWeight: 'The weight must be a integer between 1 and 350',
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
			lifeSpan: 'The life span must be a integer between 1 and 25',
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
			temperamentsSelect: 'You can only select between 2 and 10 temperaments',
		}

	if (inputs.imageUrl && !imageUrlRegex.test(inputs.imageUrl))
		errors = {
			...errors,
			imageUrl:
				'This field must have a URL format. For example: https://exampleurl.com/optional',
		}

	if (inputs.bred_for !== '' && !bredForRegex.test(inputs.bred_for))
		errors = {
			...errors,
			bred_for: 'Minimum 5 characters',
		}

	if (inputs.breed_group !== '' && !breedGroupRegex.test(inputs.breed_group))
		errors = {
			...errors,
			breed_group: 'Minimum 3 characters',
		}

	if (inputs.origin !== '' && !originRegex.test(inputs.origin))
		errors = {
			...errors,
			origin:
				'The format of origin must be "country, continent" or "country, region" and cannot contain numbers',
		}

	return errors
}

export default validation
