import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from '../redux/configureStore'

import Main from './Main'

import './app.scss';

const store = configureStore()
class App extends React.Component {
    render() {
        return (<Provider store={store}>
            <ConnectedRouter history={history}>
                <Main />
            </ConnectedRouter>
        </Provider>)
    }
}

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)