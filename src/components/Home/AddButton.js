import React from 'react'
import PropTypes from 'prop-types'
import AddModel from './AddModel'

class AddButton extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render() {
        return (<AddModel nextid={this.props.nextid} addItem={this.props.addItem} {...this.props.defaultValue} />)
    }
}
AddButton.propTypes = {
    addItem: PropTypes.func.isRequired,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default AddButton