import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item';

class List extends React.Component {
    render() {
        let { entrys, items } = this.props
        return (<ul style={{}}>
            {items ? items.map(item => {
                let es = entrys.filter(e => item.id === e.tid)
                let entry = (es.length) ? es[0] : {}
                return <Item key={item.name} setGrade={this.props.setGrade} item={item} entry={entry} />
            }) : "no items"}
        </ul>)
        // todo : lazy load
    }
}
List.propTypes = {
    setGrade: PropTypes.func,
    entrys: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
};
export default List;