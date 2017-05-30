import React from 'react'
import PropTypes from 'prop-types'
import ItemGrade from './ItemGrade'

class Item extends React.Component {
    render() {
        let { setGrade, entry, item } = this.props
        let { grade } = entry
        let { name, type, bgcolor, id } = item
        let styles = { backgroundColor: bgcolor }
        return (<li style={styles}>
            {name}
            <ItemGrade type={type} grade={grade} onGradeChange={(grade) => setGrade(item, entry, grade)
            } />
        </li>)
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