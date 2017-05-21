import React, { PropTypes } from 'react';
import Item from './Item';
class List extends React.Component {
    render() {
        let { entrys, items } = this.props
        return (<ul style={{}}>
            {items ? items.map(item => {
                let es = entrys.filter(e => item.id === e.tid)
                let entry = (es.length) ? es[0] : {}
                return <Item key={item.name} item={item} entry={entry} onEntryUpdate={this.props.onEntryUpdate} />
            }) : "no items"}
        </ul>)
        // todo : lazy load
    }
}
List.propTypes = {
    //   entrys: PropTypes.arrayOf(PropTypes.object),
};
export default List;