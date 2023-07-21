import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/nav/nav'

// Import views
import Landing from './views/landing/landing'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Create from './views/create/create'
import AboutUs from './views/about/aboutUs'
import Error from './views/error/error'
import Loading from './components/loading/loading'

function App() {
	const location = useLocation()

	return (
		<div className='App'>
			{location.pathname === '/' ? null : <Nav />}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/loading' element={<Loading />} />
				<Route exact path='/home' element={<Home />} />
				<Route exact path='/detail/:id' element={<Detail />} />
				<Route exact path='/create' element={<Create />} />
				<Route exact path='/about' element={<AboutUs />} />
				<Route exact path='*' element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
