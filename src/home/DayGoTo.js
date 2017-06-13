import React from 'react'
import PropTypes from 'prop-types'

// import moment from 'moment'
import DatePicker from 'material-ui/DatePicker';

class DayGoTo extends React.Component {
    constructor() {
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
    }
    onSelectDay(n,date) {
        console.log(date)
        // this.props.onSelectDay(date.diff(moment(), 'days'))
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        return (<div style={this.props.rootStyles}>
            <DatePicker autoOk={true} onChange={this.onSelectDay} />
        </div>)
    }
}
DayGoTo.propTypes = {
    onSelectDay: PropTypes.func,
}
export default DayGoTo;