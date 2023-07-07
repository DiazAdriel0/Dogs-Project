import style from './home.module.css'
import Nav from './../../components/nav/nav'
import Cards from '../../components/cards/cards'

const Home = () => {
	return (
		<div className={style.containerHome}>
			<Nav />
			<Cards />
			<h1>Home</h1>
		</div>
	)
}

export default Home
