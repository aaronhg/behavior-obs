import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon';
// var ItemGradeHOC = gradeType => WarpComponent => {
// }
let iconStyles = {
  fontSize: '36px'
};
var gradeTypes = {
  "+-2": [
    { v: -2, gen: (props) => <FontIcon className="material-icons" {...props} >sentiment_very_dissatisfied</FontIcon> },
    { v: -1, gen: (props) => <FontIcon className="material-icons" {...props} >sentiment_dissatisfied</FontIcon> },
    { v: 1, gen: (props) => <FontIcon className="material-icons" {...props} >sentiment_satisfied</FontIcon> },
    { v: 2, gen: (props) => <FontIcon className="material-icons" {...props} >sentiment_very_satisfied</FontIcon> },
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
          style: g.v === grade ? {...iconStyles,...color} : iconStyles,
          onClick: this.toggle.bind(this, g.v),
        })
      ))}
    </div>)
    // todo : delegate event
    // todo : more grade type
  }
}
ItemGrade.propTypes = {
  onGradeChange: PropTypes.func,
  grade: PropTypes.number,
}
export default ItemGrade