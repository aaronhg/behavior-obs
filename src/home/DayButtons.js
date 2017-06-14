import React from 'react'
import PropTypes from 'prop-types'
const styles = {
    paddingRight : 10,
    cursor: "pointer",
}
class DayButtons extends React.Component {
    onSelectDay(day) {
        this.props.onSelectDay(day)
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
    render() {
        let { date } = this.props
        let dayrange = [{
            txt: "-4",
            val: -4,
        },{
            txt: "-3",
            val: -3,
        },{
            txt: "DBY",
            val: -2,
        },{
            txt: "YTD",
            val: -1,
        },{
            txt: "Today",
            val: 0,
        },
        ]
        return (<div style={this.props.rootStyles}>
            {dayrange.map((d) => {
                return (<a style={styles} key={d.val} label={d.txt} onClick={() => this.onSelectDay(d.val)} >{d.txt}</a>)
            })}
        </div>)
    }
}
DayButtons.propTypes = {
    date: PropTypes.number,
    onSelectDay: PropTypes.func,
}
export default DayButtons;