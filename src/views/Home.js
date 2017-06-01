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

class Home extends React.Component {
    constructor(){
        super()
        this.saveData = this.saveData.bind(this)
    }
    componentDidMount(){
        storge.getAll().then((data)=>{
            this.props.homeActions.loadData(data)
        })
    }
    saveData(){
        let data = {
            items : this.props.items,
            entrys: this.props.entrys,
            nextid: this.props.nextid,
        }
        storge.saveAll(data).then(()=>{
            // this.props.homeActions.loadData(data)
        })
    }
    render() {
        return (<div>
            <DayFilter {...this.props.dayFilterActions} />
            <List date={this.props.entryFilter.value} nextid={this.props.nextid.entrys} {...this.props.listActions} items={this.props.items} entrys={this.props.entrys} />
            <AddButton nextid={this.props.nextid.items} {...this.props.addActions} itemDefaultValue={this.props.itemDefaultValue} />
            <Icon style={{fontSize:"48px"}}onClick={this.saveData} type="save" />
        </div>)
    }
}
Home.propTypes = {
    // entryFilter: PropTypes.func.isRequired, // todo
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemDefaultValue: PropTypes.object,
    entrys: PropTypes.arrayOf(PropTypes.object),
    // nextid: 
}
export default connect((state) => {
    return {
        ...state.home,
        // entryFilter : state.home.entryFilter,
        // items: state.home.items,
        // itemDefaultValue: state.home.itemDefaultValue,
        entrys: state.home.entrys.filter(state.home.entryFilter.fn),
    };
}, (dispatch) => {
    return {
        homeActions : bindActionCreators(homeActions.homeActions, dispatch),
        addActions: bindActionCreators(homeActions.addActions, dispatch),
        listActions: bindActionCreators(homeActions.listActions, dispatch),
        dayFilterActions:bindActionCreators(homeActions.dayFilterActions, dispatch),
    };
})(Home)