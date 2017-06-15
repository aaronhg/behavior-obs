import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemDetail from './ItemDetail'
import * as itemActions from './ItemDetailRedux'

class Item extends React.Component {
    render() {
        return (<ItemDetail goBack={this.props.goBack} tags={this.props.tags} item={this.props.item} existNames={this.props.existNames} {...this.props.itemDetailActions} />)
    }
}
Item.propTypes = {
    // item: PropTypes.object,
    // existNames: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state,ownProps) => {
    let id = ownProps.match.params.id
    let app = state.app
    return {
        item: app.items.filter(i => i.id == id)[0] || {},
        existNames: app.items.map(i => i.name),
        tags: app.tags.map(t=>({id:t.id,name:t.name})),
        goBack: ownProps.history.goBack,
    };
}, (dispatch) => {
    return {
        itemDetailActions: bindActionCreators(itemActions, dispatch),
    };
})(Item))