import React, { PropTypes } from 'react'
import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'
class Days extends React.Component {
    constructor() {
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
    }
    onSelectDay(day) {
        this.props.onChangeDay(day)
    }
    render() {
        let { name, grade, type } = this.props
        return (<div>
            <DayButtons onSelectDay={this.onSelectDay} />
            <DayGoTo onSelectDay={this.onSelectDay} />
        </div>)
    }
}
Days.PropTypes = {
    // grade: PropTypes.number,
}
export default Days;