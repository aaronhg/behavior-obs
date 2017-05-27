import React from 'react'
class AddButton extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
        this.state = {
            DisplayBlock: false,
        }
    }
    handleDisplay(v) {
        if (v === false && this.state.DisplayBlock === true)
            this.setState({ DisplayBlock: false })
        else if (this.state.DisplayBlock == false)
            this.setState({ DisplayBlock: true })
    }
    handleAdd() {
        const { name, bgcolor } = this.refs
        this.props.onAdd({
            name: name.value,
            bgcolor: bgcolor.value,
        })
        this.setState({ DisplayBlock: false })
    }
    render() {
        let { DisplayBlock } = this.state
        let display = DisplayBlock ? "block" : "none"
        return (<div>
            <button onClick={this.handleDisplay}>+</button>
            <button style={{ display }} onClick={() => this.handleDisplay(false)}>-</button>
            <div style={{ display }}>
                name <input type="text" ref="name" /><br />
                bgcolor <input ref="bgcolor" defaultValue="#AAAAAA" /><br />
                <button onClick={this.handleAdd}> add </button>
            </div>
        </div>
        )
    }
}
export default AddButton