import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class TagsTag extends React.Component {
    render() {
        return (<div>
            tag : {JSON.stringify(this.props.tag)}
            <br />
            items :{this.props.items.map(i => {
                return (<div key={i.id}><Link to={`/tags/i/${i.id}`}>{i.name}</Link>{JSON.stringify(i)}</div>)
            })}
            <br />
            records :{this.props.records.map(r => {
                return (<div key={r.id}><Link to={`/tags/r/${r.id}`}>{r.name}</Link>{JSON.stringify(r)}</div>)
            })}
        </div>)
    }
}
TagsTag.propTypes = {
    // item: PropTypes.object,
    // existNames: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    // state.router.location.pathname = "/tags/t/:id"
    let pathname = state.router.location.pathname
    let id = pathname.split("/")[3]
    let app = state.app
    var tag = app.tags.filter(t => t.id == id)[0]
    let ref_item_ids, items = [], records = []
    if (tag) {
        ref_item_ids = tag.ref_items && tag.ref_items.map(i => i.id) || []
        items = app.items.filter(i => ref_item_ids.indexOf(i.id) >= 0)
        records = app.records.filter(r => ref_item_ids.indexOf(r.ref_item_id) >= 0)
    }
    return {
        tag,
        items,
        records,
    };
})(TagsTag))