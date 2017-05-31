import React from 'react'
import PropTypes from 'prop-types'

import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'

class DayFilter extends React.Component {
    render() {
        let styles = {float:"left"}
        return (<div>
            <DayButtons rootStyles={styles} onSelectDay={this.props.setEntryFilterByDay} />
            <DayGoTo rootStyles={styles} onSelectDay={this.props.setEntryFilterByDay} />
        </div>)
    }
}
DayFilter.propTypes = {
    setEntryFilterByDay: PropTypes.func,
}
export default DayFilter