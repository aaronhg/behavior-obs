import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemDetail from './ItemDetail'
import * as itemActions from './ItemDetailRedux'

class Item extends React.Component {
    render() {
        return (<ItemDetail tags={this.props.tags} item={this.props.item} existNames={this.props.existNames} {...this.props.itemDetailActions} />)
    }
}
Item.propTypes = {
    // item: PropTypes.object,
    // existNames: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    // state.router.location.pathname = "/items/1"
    let pathname = state.router.location.pathname
    let id = pathname.split("/")[2]
    let app = state.app
    return {
        item: app.items.filter(i => i.id == id)[0] || {},
        existNames: app.items.map(i => i.name),
        tags: app.tags,
    };
}, (dispatch) => {
    return {
        itemDetailActions: bindActionCreators(itemActions, dispatch),
    };
})(Item))