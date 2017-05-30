import React from 'react'
import PropTypes from 'prop-types'

class DayGoTo extends React.Component {
    constructor() {
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
        this.gotoDOM = null
    }
    onSelectDay() {
        this.props.onSelectDay(this.gotoDOM.value)
    }
    render() {
        let { date } = this.props
        return (<div>
            <input ref={input => this.gotoDOM = input} value={date} />
            <button onClick={this.onSelectDay} >go</button>
        </div>)
        // todo : go by calendar
    }
}
DayGoTo.propTypes = {
    onSelectDay: PropTypes.func,
}
export default DayGoTo;