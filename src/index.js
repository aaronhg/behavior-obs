import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Home from './views/Home'

var root = document.createElement("div");
document.body.appendChild(root);

const store = configureStore()

ReactDOM.render(<Provider store={store}><Home /></Provider>,root)