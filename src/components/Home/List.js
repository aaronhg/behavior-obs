import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item';

class List extends React.Component {
    // shouldComponentUpdate(nextProps, nextState){
        
    // }
    render() {
        let { entrys, items } = this.props
        return (
            <div>
                {items.length ? 
                    items.map(item => {
                        let es = entrys.filter(e => item.id === e.tid)
                        let entry = (es.length) ? es[0] : {}
                        return (<Item date={this.props.date} nextid={this.props.nextid} key={item.name} setGrade={this.props.setGrade} item={item} entry={entry} />)
                    }) 
                    : "no items"
                }
            </div>
        )
        // todo : lazy load
        // todo : Item's key should use id
    }
}
List.propTypes = {
    setGrade: PropTypes.func,
    entrys: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
};
export default List;