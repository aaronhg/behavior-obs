import React from 'react';
class ItemGrade extends React.Component {
  constructor(props) {
    super()
    // this.toggle = this.toggle.bind(this);
    // this.state = {
    //   grade: props.grade,
    // }
  }
  toggle(grade) {
    if (grade === this.props.grade)
      grade = 0
    this.props.onGradeChange(grade)
    // this.setState({ grade })
  }
  render() {
    let { entrys,grade } = this.props
    // let { grade } = this.state
    // return (<div>
    //         {entrys.map(entry=>(<span className={entry.className} onClick={this.toggle.bind(this,entry)} />))}
    //     </div>)
    let color = 'red'
    let grades = [1,2,3,4]
    return (<div>
        {grades.map((g)=>(
          <span key={g} style={grade===g?{color}:null} onClick={this.toggle.bind(this,g)}>{g}</span>
          ))}
        </div>)
    // todo delegate event
  }
}
export default ItemGrade;