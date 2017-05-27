import React from 'react'
import AddModel from './AddModel'

class AddButton extends React.Component {
    render() {
        return (<AddModel addItem={this.props.addItem} {...this.props.defaultValue} />)
    }
}
export default AddButton