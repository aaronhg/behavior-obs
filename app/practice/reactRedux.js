import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

var app = document.createElement("div")
document.body.appendChild(app)

let actionCreator = () => (
    {
        type: "action1",
    })
var store = createStore((state, action = { type: 'action0' }) => {
    return action
})
var AppContainer = ()=>{
    return <App {...this.props.action}/>
}
class App extends React.Component {
    render() {
        return (<div onClick={() => this.props.action1()}>{this.props.type1}</div>)
    }
}
var AppConnected = connect(state => ({ type1: state.type }), {
    action1: bindActionCreators(actionCreator, store.dispatch)
})(App)
ReactDOM.render(<Provider store={store}><AppConnected /></Provider>, app)