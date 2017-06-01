import React from 'react'
import PropTypes from 'prop-types'

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
            id: this.props.nextid || 1,
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
addModel.propTypes = {
    addItem: PropTypes.func.isRequired,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default addModel