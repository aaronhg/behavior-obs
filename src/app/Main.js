import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom'

import Home from '../home/Home'
import Items from '../items/Items'
import Item from '../items/item/Item'
import Tags from '../tags/Tags'
import TagsETag from '../tags/e/TagsETag'
import TagsItem from '../tags/i/TagsItem'
import TagsTag from '../tags/t/TagsTag'

import FontIcon from 'material-ui/FontIcon'
import AppBar from 'material-ui/AppBar'
import { loadData } from './MainRedux'
import storage from '../utils/storage'
import MemoDialog from '../dialog/MemoDialog'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
var injectTapEventPlugin = require("react-tap-event-plugin")
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
injectTapEventPlugin();
import Snackbar from 'material-ui/Snackbar'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
class Main extends React.Component {
    constructor() {
        super()
        this.saveData = this.saveData.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            snackbarOpen : false,
            snackbarMessage:"",
        }
    }
    saveData() {
        let data = this.props.store.getState().app
        storage.saveAll(data).then(() => {
            this.setState({
                snackbarOpen: true,
                snackbarMessage:"Saved",
            });
        })
    }
    handleRequestClose () {
        this.setState({
            snackbarOpen: false,
        });
    };
    componentDidMount() {
        // todo : init load
        storage.getAll.then((data) => {
            this.props.store.dispatch(loadData(data))
            this.setState({
                snackbarOpen: true,
                snackbarMessage:"Loaded",
            });
        })
    }
    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <AppBar
                    title={<span>Behobs</span>}
                    showMenuIconButton={false}
                    iconElementRight={<FlatButton label="Save" />}
                    onRightIconButtonTouchTap={this.saveData}
                />
                <div>
                    <Link to="/"><FontIcon className="material-icons">input</FontIcon>input</Link>
                    <Link to="/items"><FontIcon className="material-icons">list</FontIcon>item list</Link>
                    <Link to="/tags"><FontIcon className="material-icons">insert_chart</FontIcon>tags</Link>
                </div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact strict path="/items" component={Items} />
                    <Route path="/items/:id" component={Item} />
                    <Route exact strict path="/tags" component={Tags} />
                    <Route path="/tags/e/:id" component={TagsETag} />
                    <Route path="/tags/i/:id" component={TagsItem} />
                    <Route path="/tags/t/:id" component={TagsTag} />
                </div>
                <MemoDialog />
                <Snackbar
                    open={this.state.snackbarOpen}
                    message={this.state.snackbarMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        </MuiThemeProvider>)
        // <FontIcon style={{ fontSize: "48px" }} onClick={this.saveData} type="save" />
    }
}
export default Main