import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/reducer'
import ThunkMiddleware from 'redux-thunk'

const composeEnhancers = composeWithDevTools({})

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(ThunkMiddleware)),
)

export default store
