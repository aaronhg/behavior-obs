import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import HomeItemGrade from './HomeItemGrade'
import { Badge, Icon } from 'antd'
import gen from '../utils/id'

// <Badge count="tag1" /><Badge count="tag2" />

class HomeItem extends React.Component {
    constructor() {
        super()
        this.setGrade = this.setGrade.bind(this)
    }
    setGrade(...args) {
        let { date } = this.props
        this.props.setGrade(...args, gen(), date)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        let { record, item } = this.props
        let { grade } = record
        let { name, type, bgcolor, id } = item
        let setGrade = this.setGrade
        let rootStyles = { backgroundColor: bgcolor, height: "40px" }
        let gradeStyles = { float: "right" }
        return (<div className="card" style={rootStyles} >
            <Icon type="star-o" /><Link to={`/items/${id}`} > {name}</Link>

            <HomeItemGrade gradeStyles={gradeStyles} type={item.gtype} grade={grade} onGradeChange={(grade) => setGrade(item, record, grade)} />
        </div>)
    }
}
HomeItem.propTypes = {
    setGrade: PropTypes.func,
    record: PropTypes.shape({
        grade: PropTypes.number,
    }),
    item: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        bgcolor: PropTypes.string,
        id: PropTypes.string,
    }),
}
export default HomeItem