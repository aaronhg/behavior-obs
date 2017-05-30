import { createStore, bindActionCreators, combineReducers,applyMiddleware } from 'redux'
import ReduxLogger from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore() {
    // const store = applyMiddleware(ReduxLogger)(createStore)(combineReducers(rootReducer))
    const store = createStore(
        combineReducers(
            rootReducer,
        ),
        applyMiddleware(
                ReduxLogger,
            )
        )
    return store
}