import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'antd'

class addModel extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
        this.state = {
            displayBlock: false,
        }
        this.inputRefs = {}
    }
    handleDisplay(isDisplay) {
        if (isDisplay === false && this.state.displayBlock === true)
            this.setState({ displayBlock: false })
        else if (this.state.displayBlock == false)
            this.setState({ displayBlock: true })
    }
    handleAdd() {
        const { name, bgcolor, gtype } = this.inputRefs
        this.setState({ displayBlock: false })
        this.props.addItem({
            name: name.value,
            bgcolor: bgcolor.value,
            gtype: gtype.value,
            id: this.props.nextid || 1,
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        let { displayBlock } = this.state
        let display = displayBlock ? "block" : "none"
        display = { display }
        return (<div>
            <button onClick={this.handleDisplay}>+</button>
            <button style={display} onClick={() => this.handleDisplay(false)}>-</button>
            <div style={display}>
                name <input ref={(ref) => this.inputRefs.name = ref} /><br />
                bgcolor <input ref={(ref) => this.inputRefs.bgcolor = ref} defaultValue="#AAAAAA" /><br />
                gtype <select ref={(ref) => this.inputRefs.gtype = ref} defaultValue="+-2" >
                    <option value="+-2">
                        +-2
                        </option>
                    <option value="+4">
                        +4
                        </option>
                </select><br />
                <button onClick={this.handleAdd}> add </button>
            </div>
        </div>
        )
        // <Icon type="minus-circle-o" />
        // <Icon type="minus"  />
        // <Icon type="plus" />
        // <Icon type="plus-circle-o"  />
        // <span>{String.fromCharCode(9312)}</span>
        // <span>{String.fromCharCode(9313)}</span>
        // <span>{String.fromCharCode(9314)}</span>
        // <span>{String.fromCharCode(9315)}</span>
    }
}
addModel.propTypes = {
    addItem: PropTypes.func.isRequired,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default addModel