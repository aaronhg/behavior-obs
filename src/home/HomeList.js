import React from 'react'
import PropTypes from 'prop-types'

import HomeItem from './HomeItem';

class List extends React.Component {
    // shouldComponentUpdate(nextProps, nextState){
        
    // }
    render() {
        let { records, items } = this.props
        return (
            <div>
                {items.length ? 
                    items.map(item => {
                        let es = records.filter(e => item.id === e.tid)
                        let record = (es.length) ? es[0] : {}
                        return (<HomeItem date={this.props.date} key={item.name} setGrade={this.props.setGrade} item={item} record={record} />)
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
    records: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
};
export default List;