import { createStore, bindActionCreators, combineReducers,applyMiddleware } from 'redux'
import ReduxLogger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore() {
    // const store = createStore(combineReducers({
    //     ...rootReducer,
    // }))
    const store = applyMiddleware(ReduxLogger)(createStore)(combineReducers(rootReducer))
    return store
}