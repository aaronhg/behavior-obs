import React from 'react'
import PropTypes from 'prop-types'

class DayButtons extends React.Component {
    onSelectDay(day) {
        this.props.onSelectDay(day)
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
    render() {
        let { date } = this.props
        let dayrange = [-4, -3, -2, -1, 0]
        return (<div style={this.props.rootStyles}>
            {dayrange.map((day) => {
                return (<button key={day} value={day} onClick={() => this.onSelectDay(day)} >{day}</button>)
            })}
        </div>)
        // todo : calendar
    }
}
DayButtons.propTypes = {
    date: PropTypes.number,
    onSelectDay: PropTypes.func,
    // defaultValue: PropTypes.arrayOf(PropTypes.object).isRequired,
    // defaultValue: PropTypes.object,
    // defaultValue: PropTypes.arrayOf(PropTypes.object),
}
export default DayButtons;