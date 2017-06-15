import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'
import moment from 'moment'
import DatePicker from 'material-ui/DatePicker';
const styles = {
    paddingRight : 10,
    cursor: "pointer",
}
class DayGoTo extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event,date) {
        // console.log(date)
        this.props.onSelectDay(moment(date).format("YYYY/MM/DD"))
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        // style={this.props.rootStyles}
        return (<div>
                <FontIcon style={styles} className="material-icons" onClick={()=>this.refs.dp.openDialog()}>date_range</FontIcon>
                <DatePicker ref="dp" style={{display:"none"}}
                    onChange={this.handleChange}
                    autoOk={true} />
                    </div>
        )
    }
}
DayGoTo.propTypes = {
    onSelectDay: PropTypes.func,
}
export default DayGoTo;