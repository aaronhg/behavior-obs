import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Icon } from 'antd'

import ItemDetail from '../components/Item/ItemDetail'
import * as itemActions from './ItemRedux'

class Item extends React.Component {
    render(){
        let id = this.props.match.params.id
        return (<ItemDetail id={id} {...this.props.itemDetailActions}>    

                </ItemDetail>
            )
    }
}
Item.propTypes = {
    // addItem: PropTypes.func.isRequired,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    return {
        itemDefaultValue: state.itemDefaultValue,
        // existItemNames: state.entrys.filter(state.entryFilter.fn), // todo :
    };
}, (dispatch) => {
    return {
        itemDetailActions: bindActionCreators(itemActions.itemDetailActions, dispatch),
    };
})(Item))