import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {Icon} from 'antd'
import List from '../components/Home/List'
import DayFilter from '../components/Home/DayFilter'
import AddButton from '../components/Home/AddButton'
import * as homeActions from './HomeRedux'
// import model from './utils/model'
import storge from '../utils/storge'

import { withRouter } from 'react-router-dom'

class Home extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render() {
        return (<div>
            <DayFilter {...this.props.dayFilterActions} />
            
            <hr />
            <List date={this.props.entryFilter.value} nextid={this.props.nextid.entrys} {...this.props.listActions} items={this.props.items} entrys={this.props.entrys} />
            <AddButton />
        </div>)
    }
}
Home.propTypes = {
    // entryFilter: PropTypes.func.isRequired, // todo
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    entrys: PropTypes.arrayOf(PropTypes.object),
    // nextid: 
}
export default withRouter(connect((state) => {
    return {
        ...state.app,
        entrys: state.app.entrys.filter(state.app.entryFilter.fn),
    };
}, (dispatch) => {
    return {
        homeActions : bindActionCreators(homeActions.homeActions, dispatch),
        listActions: bindActionCreators(homeActions.listActions, dispatch),
        dayFilterActions:bindActionCreators(homeActions.dayFilterActions, dispatch),
    };
})(Home))