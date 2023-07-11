import style from './pagination.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react'
import { setCurrentPage } from '../../redux/actions/actions'

const Pagination = () => {
	const allDogs = useSelector(state => state.allDogs)
	const currentPage = useSelector(state => state.currentPage)
	const dispatch = useDispatch()

	/* useEffect(() => {
		dispatch(setCurrentPage(1))
	}, [allDogs]) */

	const totalPages = Math.ceil(allDogs.length / 8)
	const pages = Array.from(
		{ length: totalPages },
		(ignored, index) => index + 1,
	)

	const handleClick = event => {
		const { value } = event.target
		dispatch(setCurrentPage(value))
	}

	const handleClickPrev = () => {
		dispatch(setCurrentPage(currentPage - 1))
	}

	const handleClickNext = () => {
		dispatch(setCurrentPage(currentPage + 1))
	}

	return (
		<div className={style.containerPagination}>
			<button disabled={currentPage === 1} onClick={handleClickPrev}>
				Prev
			</button>
			{pages.map(page => (
				<button
					key={page}
					onClick={handleClick}
					value={page}
					className={
						currentPage === page ? style.currentPage : style.pageButton
					}
				>
					{page}
				</button>
			))}
			<button disabled={currentPage === totalPages} onClick={handleClickNext}>
				Next
			</button>
		</div>
	)
}

export default Pagination
