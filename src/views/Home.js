import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
// import List from './List'
// import Days from './Days'
import AddButton from '../components/Home/AddButton'
import * as homeActions from './HomeRedux'
// import model from './utils/model'
class Home extends React.Component {
    constructor() {
        super()
        // this.handleAdd = this.handleAdd.bind(this)
        // this.changeDay = this.changeDay.bind(this)
        // this.updateEntry = this.updateEntry.bind(this)
        // var d = new Date()
        // this.state = {
        //     start: d.setHours(0, 0, 0, 0), // timestamp
        //     end: d.setHours(24, 0, 0, 0), // timestamp
        //     entrys: [],
        //     items: [],
        // }
        // todo : entry cache
    }
    // componentDidMount() {
    //     let { start, end } = this.state
    //     model.getData({ start, end }).then((data) => {
    //         this.setState(data)
    //     })
    // }
    // changeDay(day) {
    //     var d = new Date()
    //     d.setHours(day * 24)
    //     var opt = {
    //         start: d.setHours(0, 0, 0, 0), // timestamp
    //         end: d.setHours(24, 0, 0, 0), // timestamp
    //         entrys: [],
    //     }
    //     this.setState(opt)
    //     model.getData(opt).then((data) => {
    //         opt.entrys = data.entrys
    //         this.setState(opt)
    //     })
    // }
    // handleAdd(item) {
    //     const items = this.state.items
    //     item.id = App.nextTid++
    //     model.saveData("item", item).then(() => {
    //         items.push(item)
    //         this.setState({ items })
    //     })
    //     // change flag & save a record
    // }
    // updateEntry(tid, entry, grade) {
    //     // find entry and update
    //     let { entrys } = this.state
    //     if (!entry.id) {
    //         entry.updateAt = (new Date()).getTime()
    //         entry.tid = tid
    //         entry.grade = grade
    //         entry.id = App.nextId++
    //         entrys.push(entry)
    //         model.saveData("entry", entry)
    //     }
    //     else {
    //         entry.grade = grade
    //         entry.updateAt = (new Date()).getTime()
    //         model.saveData("entry", entry)
    //     }
    //     this.setState({ entrys })
    //     // todo : immutable ? rollback ?
    // }
    render() {
        // let { name, grade, type } = this.props
        // let { flag, entrys, items } = this.state
        return (<div>
            <AddButton {...this.props.addActions} />
        </div>)

        // <Days onChangeDay={this.changeDay} />
        //     <List items={items} entrys={entrys} onEntryUpdate={this.updateEntry} />
    }
}
Home.PropTypes = {
    // grade: PropTypes.number,
}
// App.nextTid = 4
// App.nextId = 13
export default connect((state)=>{
    return {
        home : state.home,
    };
},(dispatch)=> {
    debugger
    return {
        addActions : bindActionCreators(homeActions.addActions,dispatch)
    };
})(Home)