import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Route, Link, IndexRoute, HashHistory } from 'react-router-dom';

import configureStore from './redux/configureStore'
import Home from './views/Home'
// import Root from './views/Root'
import Item from './views/Item'
import Summary from './views/Summary'

import './main.scss';

import storge from './utils/storge'

const root = document.createElement("div");
document.body.appendChild(root);

const store = configureStore()

class Main extends React.Component {
    componentDidMount() {
        storge.getAll().then((data) => {
            this.props.rootActions.loadData(data)
        })
    }
    render() {
        return (<Provider store={store}>
            <HashRouter>
                <div>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="dropdown menu">
                                <li className="menu-text">Beh-Obs</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/summary">Summary</Link></li>
                            </ul>
                        </div>
                        <Icon style={{fontSize:"48px"}} onClick={this.saveData} type="save" />
                    </div>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/items/:id" component={Item} />
                        <Route path="/summary" component={Summary} />
                    </div>
                </div>
            </HashRouter>
        </Provider>)
    }
}
ReactDOM.render(<Main />, root)
// todo : init load