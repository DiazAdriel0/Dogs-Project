import style from './pagination.module.css'
import { useSelector } from 'react-redux'
import usePagination from './../../hooks/usePagination'

const Pagination = () => {
	const currentPage = useSelector(state => state.currentPage)

	const pagination = usePagination()

	return (
		<div className={style.containerPagination}>
			<button
				disabled={currentPage === 1}
				className={currentPage === 1 ? style.disabled : style.prevNextButtons}
				onClick={pagination.handleClickPrev}
			>
				Prev
			</button>

			{pagination.pages.map(page => (
				<button
					key={page}
					onClick={pagination.handleClick}
					value={page}
					className={
						currentPage === page ? style.currentPage : style.pageButton
					}
				>
					{page}
				</button>
			))}

			<button
				disabled={currentPage === pagination.totalPages}
				className={
					currentPage === pagination.totalPages
						? style.disabled
						: style.prevNextButtons
				}
				onClick={pagination.handleClickNext}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
