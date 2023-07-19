/* eslint-disable no-unused-vars */
import style from './select.module.css'
import closeButton from './../../assets/close-button.svg'
import { useEffect, useState } from 'react'
import useSelectMaster from '../../hooks/useSelectMaster'

const SelectMaster = props => {
	const { options, placeholder, multi, name } = props
	const {
		filteredOptions,
		inputValue,
		selectedValues,
		defaultValue,
		handleInputChange,
		handleClose,
		handleCloseOption,
		handleChange,
	} = useSelectMaster(props)

	return (
		<div className={style.containerSelect}>
			<button type='button' className={style.containerButton}>
				{multi
					? (selectedValues.length || <span></span>) &&
					  selectedValues.map(option => (
							<div className={style.selectedOptions} key={option.value}>
								<span className={style.optionName}>{option.value}</span>
								<div className={style.closeButtonOption}>
									<img
										className={style.closeImageOption}
										src={closeButton}
										onClick={() => handleCloseOption(event, option.value)}
									/>
								</div>
							</div>
					  ))
					: (selectedValues.length || <span></span>) && (
							<span>{selectedValues[0]?.value}</span>
					  )}
				<input
					type='text'
					disabled={!multi}
					placeholder={(!selectedValues.length || null) && placeholder}
					className={style.input}
					value={inputValue}
					onChange={event => handleInputChange(event)}
				></input>

				<select
					className={style.select}
					value={defaultValue}
					onChange={handleChange}
					name={name}
				>
					<option
						value={defaultValue}
						disabled
						className={style.selectPlaceholder}
					>
						Select {placeholder}
					</option>
					{filteredOptions.length
						? filteredOptions.map(option => (
								<option key={option.label} value={option.value}>
									{option.label}
								</option>
						  ))
						: !inputValue &&
						  options.map(option => (
								<option key={option.label} value={option.value}>
									{option.label}
								</option>
						  ))}
				</select>

				<div className={style.closeButton}>
					<img
						className={style.closeImage}
						src={closeButton}
						onClick={handleClose}
					/>
				</div>
			</button>
		</div>
	)
}

export default SelectMaster
