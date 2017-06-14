import React from 'react'
import { Link,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Tags extends React.Component {
    render() {
        let { tags,etags,items} = this.props
        items = items.filter(i => !i.archived)
        let style ={paddingLeft:"5px"}
        return (<div>
            {tags.map((t)=><Link key={t.id} style={style} to={`/tags/t/${t.id}`}>{t.name}</Link>)}
            <hr />
            {etags.map((e)=><Link key={e.id} style={style} to={`/tags/e/${e.id}`}>{e.name}</Link>)}
            <hr />
            {items.map((i)=><Link key={i.id} style={style} to={`/tags/i/${i.id}`}>{i.name}</Link>)}
        </div>)
    }
}

export default withRouter(connect((state) => {
    let app = state.app
    return {
        items: app.items,
        tags: app.tags,
        etags: app.etags,
    };
})(Tags))