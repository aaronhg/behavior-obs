import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class TagsETag extends React.Component {
    render() {
        return (<div>
            item : {JSON.stringify(this.props.item)}
            <br />
            ref_tags : {this.props.item?this.props.item.ref_tags.map(t => <Link key={t.id} to={`/tags/t/${t.id}`}>{t.name}</Link>):""}
            <br />
            records :{this.props.records.map(r => {
                return (<div key={r.id}>
                    <Link to={`/tags/r/${r.id}`}>{r.name}</Link>{JSON.stringify(r)}
                    <br />
                    ref_etags : {r.ref_etags.map(e => <Link key={e.id} to={`/tags/e/${e.id}`}>{e.name}</Link>)}
                </div>)
            })}
        </div>)
    }
}
TagsETag.propTypes = {
    // item: PropTypes.object,
}
export default withRouter(connect((state) => {
    // state.router.location.pathname = "/tags/i/:id"
    let pathname = state.router.location.pathname
    let id = pathname.split("/")[3]
    let app = state.app
    var item = app.items.filter(i => i.id == id)[0]
    let records = []
    if (item) {
        records = app.records.filter(r => r.ref_item_id == id) || []
    }
    return {
        item,
        records,
    };
})(TagsETag))