import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Icon } from 'antd'

import ItemDetail from '../components/Item/ItemDetail'
import * as itemActions from './ItemRedux'

class Item extends React.Component {
    render() {
        return (<ItemDetail nextid={this.props.nextid} item={this.props.item} existNames={this.props.existNames} itemDefaultValue={this.props.itemDefaultValue} {...this.props.itemDetailActions} />)
    }
}
Item.propTypes = {
    // itemDefaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // item: PropTypes.object,
    // existNames: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    // state.router.location.pathname = "/items/1"
    let pathname = state.router.location.pathname
    let id = pathname.split("/")[2]
    let app = state.app
    return {
        itemDefaultValue: app.itemDefaultValue,
        item: app.items.filter(i => i.id == id)[0] || {},
        existNames: app.items.map(i => i.name),
        nextid: app.nextid.items,
    };
}, (dispatch) => {
    return {
        itemDetailActions: bindActionCreators(itemActions.itemDetailActions, dispatch),
    };
})(Item))