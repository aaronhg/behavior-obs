import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import HomeItemGrade from './HomeItemGrade'
import FontIcon from 'material-ui/FontIcon';
import { getShortID, getTimestamp } from '../utils/id'
import { Card } from 'material-ui/Card'

class Star extends React.Component {
    render() {
        let { star } = this.props
        let style = star ? { color: "red" ,cursor: "pointer"} : {cursor: "pointer"}
        return (<FontIcon className="material-icons" style={style} onClick={this.props.onStarChange} >star_outline</FontIcon>)
    }
}
class HomeItem extends React.Component {
    constructor() {
        super()
        this.setGrade = this.setGrade.bind(this)
        this.setStar = this.setStar.bind(this)
    }
    setGrade(grade) {
        let { record, item } = this.props
        let { date } = this.props
        if (!record.id) {
            record = {
                id: getShortID(),
                ref_item_id: item.id,
                date,
                star: false,
                grade,
                memo: "",
                update_at: getTimestamp(),
            }
        } else {
            record.grade = grade
        }
        this.props.saveRecord(record)
    }
    setStar() {
        let { record, item } = this.props
        let { date } = this.props
        if (!record.id) {
            record = {
                id: getShortID(),
                ref_item_id: item.id,
                date,
                star: true,
                grade: 0,
                memo: "",
                update_at: getTimestamp(),
            }
        } else {
            record.star = !record.star
        }
        this.props.saveRecord(record)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    render() {
        let { record, item, saveRecord, date } = this.props
        let { grade, star, memo, ref_etags } = record
        let { name, type, bgcolor, id } = item
        let rootStyles = { backgroundColor: bgcolor, height: "60px", paddingTop: "4px", paddingBottom: "4px" }
        let gradeStyles = { float: "right" ,cursor: "pointer",}
        let memoStyles = {
            color: (ref_etags && ref_etags.length) || memo ? "red" : null,
            cursor: "pointer",
        }
        return (<Card style={rootStyles} >
            <Link to={`/tags/i/${id}`}>{name}</Link>
            <HomeItemGrade gradeStyles={gradeStyles} type={item.gtype} grade={grade} onGradeChange={(grade) => this.setGrade(grade)} />
            <Star star={star} onStarChange={() => this.setStar()} />
            <FontIcon className="material-icons" style={memoStyles} onClick={() => {
                if (!record.id) {
                    record.date = date
                    record.ref_item_id = item.id
                }
                this.props.openMemoDialog(record)
            }
            }>insert_comment</FontIcon>
        </Card>)
    }
}
HomeItem.propTypes = {
    saveRecord: PropTypes.func,
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