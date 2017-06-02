import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import {DatePicker} from 'antd'

class DayGoTo extends React.Component {
    constructor() {
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
        // this.gotoDOM = null
    }
    onSelectDay(date,dateString) {
        this.props.onSelectDay(date.diff(moment,'days'))
    }
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render() {
        let { date } = this.props
        return (<div>
            <DatePicker defaultValue={moment()} onChange={this.onSelectDay}/>
            
        </div>)
        // todo : go by calendar
        //<input ref={input => this.gotoDOM = input} value={date} />
            // <button onClick={this.onSelectDay} >go</button>
    }
}
DayGoTo.propTypes = {
    onSelectDay: PropTypes.func,
}
export default DayGoTo;