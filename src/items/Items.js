import React from 'react'
import AddButton from './AddButton'

import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import * as itemActions from './item/ItemDetailRedux'
var genItem = ([i,that]) => {
    return (<div key={i.id}>
        tools:<Link to={`/items/${i.id}`}>edit,</Link> ,<a style={{ cursor: "pointer" }} onClick={() => {
            that.props.saveItem({
                ...i,
                archived: !i.archived,
            })
        }}>{i.archived ? "unarchive" : "archive"}</a>
        <br />
        <Link to={`/tags/i/${i.id}`}>{i.name}</Link>
        {JSON.stringify(i)}
        <br />
        ref_tags : {i.ref_tags.map(t => <Link key={t.id} to={`/tags/t/${t.id}`}>{t.name}</Link>)}
    </div>)
}
class Items extends React.Component {
    render() {
        let { items } = this.props
        let i1s = items.filter(i => !i.archived)
        let i2s = items.filter(i => i.archived)
        return (<div>
            {i1s.map(i=>[i,this],this).map(genItem)}
            <hr />
            {i2s.map(i=>[i,this],this).map(genItem)}
            <AddButton />
        </div>)
    }
}
Items.propTypes = {
    // saveItem,
}
export default withRouter(connect((state) => {
    return {
        items: state.app.items || [],
    };
}, (dispatch) => {
    return {
        saveItem: bindActionCreators(itemActions, dispatch).saveItem,
    };
})(Items))