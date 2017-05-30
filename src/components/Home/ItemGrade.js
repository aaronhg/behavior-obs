import React from 'react'
import PropTypes from 'prop-types'

class ItemGrade extends React.Component {
  toggle(grade) {
    if (grade === this.props.grade)
      grade = 0
    this.props.onGradeChange(grade)
  }
  render() {
    let { grade } = this.props
    let color = { color: 'red' }
    let grades = [1, 2, 3, 4]
    return (<div>
      {grades.map((g) => (
        <span key={g} style={grade === g ? color : null} onClick={this.toggle.bind(this, g)}>{g}</span>
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