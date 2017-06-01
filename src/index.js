import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { HashRouter, Route, Link } from 'react-router-dom';

import configureStore from './redux/configureStore'
import Home from './views/Home'

const root = document.createElement("div");
document.body.appendChild(root);

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Home} />
        </HashRouter>
    </Provider>
    , root)
// todo : route