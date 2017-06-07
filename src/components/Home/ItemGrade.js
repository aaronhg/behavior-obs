import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
// var ItemGradeHOC = gradeType => WarpComponent => {
// }
var gradeTypes = {
  "+-2": [
    { v: -2, gen: (props) => <Icon type="minus-circle-o" {...props} ></Icon> },
    { v: -1, gen: (props) => <Icon type="minus" {...props} /> },
    { v: 1, gen: (props) => <Icon type="plus" {...props} /> },
    { v: 2, gen: (props) => <Icon type="plus-circle-o" {...props} /> },
  ],
  "+5": [
    { v: 1, gen: (props) => <span {...props} > {String.fromCharCode(9312)}</span> },
    { v: 2, gen: (props) => <span {...props} > {String.fromCharCode(9313)}</span> },
    { v: 3, gen: (props) => <span {...props} > {String.fromCharCode(9314)}</span> },
  { v: 4, gen: (props) => <span {...props} > {String.fromCharCode(9315)}</span> },
  { v: 5, gen: (props) => <span {...props} > {String.fromCharCode(9316)}</span> },
  ],
  "keyin": [
    { v: 1, gen: (props) => <input {...props} > </input> },
  ],
}
gradeTypes.default = gradeTypes["+-2"]

class ItemGrade extends React.Component {
  toggle(grade) {
    if (grade === this.props.grade)
      grade = 0
    this.props.onGradeChange(grade)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true
    // let { grade, type } = this.props
    // let { ngrade, ntype } = nextProps
    // return !((grade === ngrade) || (type === ntype))
  }
  render() {
    let { grade, type } = this.props
    let color = { color: 'red' }
    let grades = gradeTypes[type] || gradeTypes.default
    return (<div style={this.props.gradeStyles}>
      {grades.map((g) => (
        g.gen({
          key: g.v,
          style: g.v === grade ? color : null,
          onClick: this.toggle.bind(this, g.v),
        })
      ))}
    </div>)
    // todo : delegate event
    // todo : another grade type
  }
}
ItemGrade.propTypes = {
  onGradeChange: PropTypes.func,
  grade: PropTypes.number,
}
export default ItemGrade