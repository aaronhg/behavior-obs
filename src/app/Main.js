import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';

import Home from '../home/Home'
import Items from '../items/Items'
import Item from '../items/item/Item'
import Tags from '../tags/Tags'

import { Icon } from 'antd'

import { loadData } from './MainRedux'
// import storage from './utils/storage'

class Main extends React.Component {
    constructor() {
        super()
        this.saveData = this.saveData.bind(this)
    }
    saveData() {
        // let data = store.getState().app
        // storage.saveAll(data).then(() => {
        // })
    }
    componentDidMount() {
        // todo : init load
        // storage.getAll().then((data) => {
        //     store.dispatch(loadData(data))
        // })
    }
    render() {
        return (<div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu">
                        <li className="menu-text"><Link to="/">Beh-Obs</Link></li>
                        <li><Link to="/Items">Items</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/items" component={Items} />
                <Route path="/items/:id" component={Item} />
                <Route path="/tags" component={Tags} />
            </div>
        </div>)
        // <Icon style={{ fontSize: "48px" }} onClick={this.saveData} type="save" />
    }
}
export default Main