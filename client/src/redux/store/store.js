import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer/reducer'
import ThunkMiddleware from 'redux-thunk'

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(ThunkMiddleware))
)

export default store
