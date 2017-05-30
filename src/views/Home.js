import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import List from '../components/Home/List'
import DayFilter from '../components/Home/DayFilter'
import AddButton from '../components/Home/AddButton'
import * as homeActions from './HomeRedux'
// import model from './utils/model'

class Home extends React.Component {
    render() {
        return (<div>
            <DayFilter {...this.props.dayFilterActions} />
            <List {...this.props.listActions} items={this.props.items} entrys={this.props.entrys} />
            <AddButton {...this.props.addActions} itemDefaultValue={this.props.itemDefaultValue}/>
        </div>)
    }
}
Home.propTypes = {
    entryFilter: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemDefaultValue: PropTypes.object,
    entrys: PropTypes.arrayOf(PropTypes.object),
}
// App.nextTid = 4
// App.nextId = 13
export default connect((state) => {
    return {
        ...state.home,
        // entryFilter : state.home.entryFilter,
        // items: state.home.items,
        // itemDefaultValue: state.home.itemDefaultValue,
        entrys: state.home.entrys.filter(state.home.entryFilter),
    };
}, (dispatch) => {
    return {
        addActions: bindActionCreators(homeActions.addActions, dispatch),
        listActions: bindActionCreators(homeActions.listActions, dispatch),
        dayFilterActions:bindActionCreators(homeActions.dayFilterActions, dispatch),
    };
})(Home)