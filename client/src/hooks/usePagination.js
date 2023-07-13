import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../redux/actions/actions'

const usePagination = () => {
	const currentPage = useSelector(state => state.currentPage)
	const allDogs = useSelector(state => state.allDogs)
	const dispatch = useDispatch()

	const cardsPerPage = 8

	const totalPages = Math.ceil(allDogs.length / cardsPerPage)

	const pages = Array.from(
		{ length: totalPages },
		(ignored, index) => index + 1,
	)

	const firstIndex = cardsPerPage * (currentPage - 1)
	const lastIndex = cardsPerPage * currentPage - 1
	const currentPageDogs = allDogs.slice(firstIndex, lastIndex + 1)

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

	return {
		currentPageDogs,
		pages,
		totalPages,
		handleClick,
		handleClickPrev,
		handleClickNext,
	}
}

export default usePagination
