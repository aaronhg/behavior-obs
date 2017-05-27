import React, { PropTypes } from 'react'
class DayButtons extends React.Component {
    onSelectDay(day) {
        this.props.onSelectDay(day)
    }
    render() {
        let { date } = this.props;
        let dayrange = [-4, -3, -2, -1, 0]
        return (<div>
            {dayrange.map(day => <button key={day} value={day} onClick={() => this.onSelectDay(day)} >{day}</button>)}
        </div>)
        // todo : go by calendar
    }
}
DayButtons.PropTypes = {
    // grade: PropTypes.number,
}
export default DayButtons;