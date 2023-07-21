/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Create from './../src/views/create/create'

test('renders content placeholders. Create', () => {
	const component = render(<Create />)

	component.getByPlaceholderText('Name')
	component.getByPlaceholderText('Image URL')
	component.getByPlaceholderText('Min Height (Inches)')
	component.getByPlaceholderText('Max Height (Inches)')
	component.getByPlaceholderText('Min Weight (Lbs)')
	component.getByPlaceholderText('Max Weight (Lbs)')
	component.getByPlaceholderText('Min Life Span (years)')
	component.getByPlaceholderText('Max Life Span (years)')
	component.getByPlaceholderText('Bred for')
	component.getByPlaceholderText('Breed Group')
	component.getByPlaceholderText('Origin')
})

test('clicking the button calls event handler once', () => {
	const mockHandler = jest.fn()

	const component = render(<Create />)

	const submitButton = component.container.querySelector('button')

	fireEvent.click(submitButton)

	expect(mockHandler.mock.calls).toHaveLength(1)
})
