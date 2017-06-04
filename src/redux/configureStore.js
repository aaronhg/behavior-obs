import { createStore, combineReducers,applyMiddleware } from 'redux'
import ReduxLogger from 'redux-logger'
import rootReducer from './reducers'

// import createHistory from 'history/createBrowserHistory'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


export const history = createHistory()
const middleware = routerMiddleware(history)

export default function configureStore() {
    // const store = applyMiddleware(ReduxLogger)(createStore)(combineReducers(rootReducer))
    const store = createStore(
        combineReducers({
            app : rootReducer,
            router: routerReducer,
        }),
        applyMiddleware(
                middleware,
                ReduxLogger,
            )
        )
    return store
}