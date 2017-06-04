import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Route, Link, IndexRoute, HashHistory } from 'react-router-dom';

import configureStore, { history } from './redux/configureStore'
import Home from './views/Home'
// import Root from './views/Root'
import Item from './views/Item'
import Summary from './views/Summary'

import './main.scss';
import { loadData } from './mainRedux'
import storge from './utils/storge'
import { Icon } from 'antd'
import { ConnectedRouter } from 'react-router-redux'

const root = document.createElement("div")
document.body.appendChild(root)

const store = configureStore()

class Main extends React.Component {
    constructor() {
        super()
        this.saveData = this.saveData.bind(this)
    }
    saveData() {
        let data = store.getState().app
        storge.saveAll(data).then(() => {
        })
    }
    componentDidMount() {
        storge.getAll().then((data) => {
            store.dispatch(loadData(data))
        })
    }
    render() {
        return (<Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="dropdown menu">
                                <li className="menu-text">Beh-Obs</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/summary">Summary</Link></li>
                            </ul>
                        </div>
                        <Icon style={{ fontSize: "48px" }} onClick={this.saveData} type="save" />
                    </div>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/items/:id" component={Item} />
                        <Route path="/summary" component={Summary} />
                    </div>
                </div>
            </ConnectedRouter>
        </Provider>)
    }
}
ReactDOM.render(<Main />, root)
// todo : init load