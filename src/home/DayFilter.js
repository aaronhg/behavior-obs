import React from 'react'
import PropTypes from 'prop-types'

import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'

class DayFilter extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    render() {
        let styles = {float:"left"}
        return (<div>
            <DayButtons rootStyles={styles} onSelectDay={this.props.setRecordFilterByDay} />
            
        </div>)
        // <DayGoTo rootStyles={styles} onSelectDay={this.props.setRecordFilterByDay} />
        
    }
}
DayFilter.propTypes = {
    setRecordFilterByDay: PropTypes.func,
}
export default DayFilter