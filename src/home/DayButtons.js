import React from 'react'
import PropTypes from 'prop-types'
import FlatButton  from 'material-ui/FlatButton'
const style = {
  width: "40px",
};
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
                return (<FlatButton style={style} key={d.val} label={d.txt} onClick={() => this.onSelectDay(d.val)} />)
            })}
        </div>)
    }
}
DayButtons.propTypes = {
    date: PropTypes.number,
    onSelectDay: PropTypes.func,
}
export default DayButtons;