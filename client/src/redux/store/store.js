import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer/reducer'
import ThunkMiddleware from 'redux-thunk'

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(ThunkMiddleware)),
)
export default store
