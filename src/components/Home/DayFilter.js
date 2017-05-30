import React from 'react'
import PropTypes from 'prop-types'

import DayButtons from './DayButtons'
import DayGoTo from './DayGoTo'

class DayFilter extends React.Component {
    render() {
        return (<div>
            <DayButtons onSelectDay={this.props.setEntryFilterByDay} />
            <DayGoTo onSelectDay={this.props.setEntryFilterByDay} />
        </div>)
    }
}
DayFilter.propTypes = {
    setEntryFilterByDay: PropTypes.func,
}
export default DayFilter