import style from './error.module.css'
import errorImage from './../../assets/dog-poop-icon.png'

const Error = () => {
	return (
		<div className={style.containerError}>
			<p className={style.error}>ERROR</p>

			<img className={style.errorImage} src={errorImage} alt='Error' />

			<p className={style.errorText}>
				Oops! It seems our adventurous dog got lost in the virtual world and
				left an unexpected gift on this page. But don&apos;t worry, our team of
				code trainers is working to find and fix it! In the meantime, why not
				enjoy some virtual walks through other sections of our site? There are
				plenty of digital bones to discover! Thank you for your patience and
				understanding. We&apos;ll be barking online again soon!
			</p>
		</div>
	)
}

export default Error
