import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class TagsETag extends React.Component {
    render() {
        return (<div>
            etag : {JSON.stringify(this.props.etag)}
            <br />
            records :{this.props.records.map(r => {
                return (<div key={r.id}>
                    <Link to={`/tags/r/${r.id}`}>{r.name}</Link>{JSON.stringify(r)}
                    <br />
                    ref_etags : {r.ref_etags.map(e => <Link key={e.id} to={`/tags/e/${e.id}`}>{e.name}</Link>)}
                </div>)
            })}
            <br />
            items :{this.props.items.map(i => {
                return (<div key={i.id}>
                    <Link to={`/tags/i/${i.id}`}>{i.name}</Link>{JSON.stringify(i)}
                    <br />
                    ref_tags : {i.ref_tags.map(t => <Link key={t.id} to={`/tags/t/${t.id}`}>{t.name}</Link>)}
                </div>)
            })}
        </div>)
    }
}
TagsETag.propTypes = {
    // item: PropTypes.object,
    // existNames: PropTypes.arrayOf(PropTypes.object),
}
export default withRouter(connect((state) => {
    // state.router.location.pathname = "/tags/e/:id"
    let pathname = state.router.location.pathname
    let id = pathname.split("/")[3]
    let app = state.app
    var etag = app.etags.filter(e => e.id == id)[0]
    let ref_record_ids, records = [], ref_item_ids, items = []
    if (etag) {
        ref_record_ids = etag.ref_records && etag.ref_records.map(r => r.id) || []
        records = app.records.filter(r => ref_record_ids.indexOf(r.id) >= 0)
        ref_item_ids = records.map(r => r.ref_item_id)
        items = app.items.filter(i => ref_item_ids.indexOf(i.id) >= 0)
    }
    return {
        etag,
        records,
        items,
    };
})(TagsETag))