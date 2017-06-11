import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {Icon} from 'antd'
import List from './HomeList'
import DayFilter from './DayFilter'
import * as homeActions from './HomeRedux'

import { withRouter } from 'react-router-dom'

class Home extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render() {
        return (<div>
            <DayFilter {...this.props.dayFilterActions} />
            
            <hr />
            <List date={this.props.recordFilter.value} {...this.props.listActions} items={this.props.items} records={this.props.records} />
            
        </div>)
    }
}
Home.propTypes = {
    // recordFilter: PropTypes.func.isRequired, // todo
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    records: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    return {
        ...state.app,
        records: state.app.records.filter(state.app.recordFilter.fn),
    };
}, (dispatch) => {
    return {
        listActions: bindActionCreators(homeActions.listActions, dispatch),
        dayFilterActions:bindActionCreators(homeActions.dayFilterActions, dispatch),
    };
})(Home))