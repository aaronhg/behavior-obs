import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import { DatePicker } from 'antd'

class DayGoTo extends React.Component {
    constructor() {
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
    }
    onSelectDay(date, dateString) {
        this.props.onSelectDay(date.diff(moment(), 'days'))
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        return (<div style={this.props.rootStyles}>
            <DatePicker defaultValue={moment()} onChange={this.onSelectDay} />
        </div>)
    }
}
DayGoTo.propTypes = {
    onSelectDay: PropTypes.func,
}
export default DayGoTo;