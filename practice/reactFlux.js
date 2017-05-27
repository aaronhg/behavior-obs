import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import dispatcher from './utils/dispatcher'
import events from 'events'
var app = document.createElement("div");
document.body.appendChild(app);
var app2 = document.createElement("div");
document.body.appendChild(app2);

var appStore = Object.create(events.EventEmitter, {
    _data: {
        name: "_data",
        value: 0,
    },
    getData: {
        name: "getData",
        value: () => this._data,
    },
})
dispatcher.register(payload => {
    if (payload)
        appStore._data = 0
    else
        appStore._data++
    appStore.emit("change")
})
class App2 extends React.Component {
    constructor() {
        super()
        this.state = {
            data: 0,
        }
    }
    componentDidMount() {
        appStore.on("change", () => {
            let data = appStore.getData()
            this.setState({ data })
        })
    }
    render() {
        return (<div onClick={() => dispatcher.dispatch()}>{this.state.data}</div>)
    }
}
ReactDOM.render(<App2 />, app)
ReactDOM.render(<App2 />, app2)