import React from 'react'
import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'
class Days extends React.Component {
    render() {
        let { name, grade, type } = this.props
        return (<div>
            <DayButtons onSelectDay={this.changeDay} />
            <DayGoTo onSelectDay={this.changeDay} />
        </div>)
    }
}
Days.PropTypes = {
    // grade: PropTypes.number,
}
export default Days;