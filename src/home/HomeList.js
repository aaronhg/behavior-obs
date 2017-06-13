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
                        let es = records.filter(e => item.id === e.ref_item_id)
                        let record = (es.length) ? es[0] : {}
                        return (<HomeItem date={this.props.date} key={item.id} openMemoDialog={this.props.openMemoDialog} saveRecord={this.props.saveRecord} item={item} record={record} />)
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
    saveRecord: PropTypes.func,
    records: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
};
export default List;