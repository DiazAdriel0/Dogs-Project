import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import SelectMaster from '../src/components/Select/select'

test('renders content SelectMaster', () => {
	const props = {
		options: [
			{ value: 'test1', label: 'test1' },
			{ value: 'test2', label: 'test2' },
		],
		multi: false,
		values: [{ value: 'This is a test', label: 'This is a test' }],
		placeholder: 'Order Dogs',
	}

	const component = render(
		<SelectMaster
			options={props.options}
			multi={props.multi}
			values={props.values}
			placeholder={props.placeholder}
		/>,
	)

	expect(component.container).toHaveTextContent('This is a test')
})
