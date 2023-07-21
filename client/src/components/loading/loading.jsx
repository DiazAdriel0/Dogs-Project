import style from './loading.module.css'
import loadingGif from './../../assets/loading.gif'

const Loading = () => {
	return (
		<div className={style.containerLoading}>
			<img className={style.loadingGif} src={loadingGif} alt='Loading' />
			<p className={style.loadingText}>LOADING . . .</p>
		</div>
	)
}

export default Loading
