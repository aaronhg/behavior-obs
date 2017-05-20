import React , { PropTypes } from 'react'
import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'
class Days extends React.Component {
    constructor(){
        super()
        this.state = {
            start:1, // timestamp
            end:1, // timestamp
        }
    }
    onSelectDay(...a){
        console.log(...a)
        // this.props.handleSelectDay()
    }
    render() {
        let { name, grade ,type} = this.props
        let { start ,end } = this.state
        return (<div>
                    debug[start:{start},end:{end}]
                    <DayButtons onSelectDay={this.onSelectDay}/>
                    <DayGoTo onSelectDay={this.onSelectDay} />
            </div>)
    }
}
Days.PropTypes = {
    // grade: PropTypes.number,
}
export default Days;