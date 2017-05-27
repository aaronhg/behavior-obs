import React from 'react'
class addModel extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
        this.state = {
            displayBlock: false,
        }
    }
    handleDisplay(isDisplay) {
        if (isDisplay === false && this.state.displayBlock === true)
            this.setState({ displayBlock: false })
        else if (this.state.displayBlock == false)
            this.setState({ displayBlock: true })
    }
    handleAdd() {
        const { name, bgcolor } = this.refs
        this.setState({ displayBlock: false })
        this.props.addItem({
            name: name.value,
            bgcolor: bgcolor.value,
        })
    }
    render() {
        let { displayBlock } = this.state
        let display = displayBlock ? "block" : "none"
        display = {display}
        return (<div>
            <button onClick={this.handleDisplay}>+</button>
            <button style={display} onClick={() => this.handleDisplay(false)}>-</button>
            <div style={display}>
                name <input type="text" ref="name" /><br />
                bgcolor <input ref="bgcolor" defaultValue="#AAAAAA" /><br />
                <button onClick={this.handleAdd}> add </button>
            </div>
        </div>
        )
    }
}
export default addModel