/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { Route, Routes } from 'react-router-dom'

// Import views
import Landing from './views/landing/landing'
import Home from './views/home/home'
import Detail from './views/detail/detail'
import Create from './views/create/create'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/home' element={<Home />} />
				<Route exact path='/detail/:id' element={<Detail />} />
				<Route exact path='/create' element={<Create />} />
			</Routes>
		</div>
	)
}

export default App
