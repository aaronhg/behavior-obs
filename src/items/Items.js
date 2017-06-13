import React from 'react'
import AddButton from './AddButton'

import { connect } from 'react-redux'
import { Link ,withRouter } from 'react-router-dom'

class Items extends React.Component {
    render() {
        let {items} = this.props
        return (<div>
            {items.map(i=>{
                return (<div key={i.id}><Link to={`/items/${i.id}`}>{i.name}</Link>{JSON.stringify(i)}</div>)
            })}
            <AddButton />
        </div>)
    }
}
Items.propTypes = {

}
export default withRouter(connect((state) => {
    return {
        items: state.app.items || [],
    };
})(Items))