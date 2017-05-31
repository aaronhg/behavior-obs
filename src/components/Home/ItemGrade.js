import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

class ItemGrade extends React.Component {
  toggle(grade) {
    if (grade === this.props.grade)
      grade = 0
    this.props.onGradeChange(grade)
  }
  render() {
    let { grade } = this.props
    let color = { color: 'red' }
    let grades = [
      { v: 1, gen: (props) => <Icon type="minus-circle-o" {...props} ></Icon> },
      { v: 2, gen: (props) => <Icon type="minus" {...props} /> },
      { v: 3, gen: (props) => <Icon type="plus" {...props} /> },
      { v: 4, gen: (props) => <Icon type="plus-circle-o" {...props} /> },
    ]
    return (<div style={this.props.gradeStyles}>
      {grades.map((g) => (
        g.gen({
          key: g.v,
          style: g.v === grade ? color : null,
          onClick: this.toggle.bind(this, g.v),
        })
      ))}
    </div>)
    // todo delegate event
  }
}
ItemGrade.propTypes = {
  onGradeChange: PropTypes.func,
  grade: PropTypes.number,
}
export default ItemGrade