import React , { PropTypes } from 'react'
import ItemGrade from './ItemGrade'
class Item extends React.Component {
    constructor(){
        super()
    }
    render() {
        let {  grade} = this.props.entry
        let {  name ,type,bgcolor,id} = this.props.item
        let { onEntryUpdate ,entry} = this.props
        let style = {}
        return (<li style={{backgroundColor:bgcolor}}>
            {name}
            <ItemGrade type={type} grade={grade} onGradeChange={(g)=>{
                onEntryUpdate(id,entry,g)
            }}/>
        </li>)
    }
}
Item.PropTypes = {
    // grade: PropTypes.number,
}
export default Item;