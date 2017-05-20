import React , { PropTypes } from 'react'
class DayGoTo extends React.Component {
    constructor(){
        super()
        this.onSelectDay = this.onSelectDay.bind(this)
    }
    onSelectDay(){
        this.props.onSelectDay(this.refs.goto.value)
    }
    render() {
        let { date } = this.props
        return (<div>
                    <input ref="goto" value={date} />
                    <button onClick={this.onSelectDay} >go</button>
            </div>)
        // todo : go by calendar
    }
}
DayGoTo.PropTypes = {
    // grade: PropTypes.number,
}
export default DayGoTo;