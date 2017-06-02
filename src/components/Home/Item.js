import React from 'react'
import PropTypes from 'prop-types'

import ItemGrade from './ItemGrade'

class Item extends React.Component {
    constructor() {
        super()
        this.setGrade = this.setGrade.bind(this)
    }
    setGrade(...args) {
        let id = this.props.nextid || 1
        let date = this.props.date
        this.props.setGrade(...args, id, date)
    }
    shouldComponentUpdate(nextProps, nextState) {
        //this.props = nextProps 
        return true
    }
    render() {
        let { entry, item } = this.props
        let { grade } = entry
        let { name, type, bgcolor, id } = item
        let setGrade = this.setGrade
        let rootStyles = { backgroundColor: bgcolor }
        let gradeStyles = { float: "right" }
        return (<div style={rootStyles}>
            {name}
            <ItemGrade gradeStyles={gradeStyles} type={item.gtype} grade={grade} onGradeChange={(grade) => setGrade(item, entry, grade)} />
        </div>)
    }
}
Item.propTypes = {
    setGrade: PropTypes.func,
    entry: PropTypes.shape({
        grade: PropTypes.number,
    }),
    item: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        bgcolor: PropTypes.string,
        id: PropTypes.number,
    }),
}
export default Item