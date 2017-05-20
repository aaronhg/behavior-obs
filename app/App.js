import React, { PropTypes } from 'react'
import List from './List'
import Days from './Days'
import AddButton from './AddButton'
// todo : show info when save record is failed
var url = "http://localhost:3000"
async function getData(){
    let i = await fetch(`${url}/items`)
    let items = await i.json()
    let e = await fetch(`${url}/entrys`)
    let entrys = await e.json()
    return {entrys,items}
    // 抽象成 可以存 localstorge or restful
}
async function saveData(t,d){
    let i = await fetch(`${url}/${t}s/${d.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(d)
    })
    d = await i.json()
    return d
    // id
    // error handling
}
class App extends React.Component {
    constructor() {
        super()
        this.handleAdd = this.handleAdd.bind(this)
        this.changeDay = this.changeDay.bind(this)
        this.updateEntry = this.updateEntry.bind(this)
        this.state = {
            start: 1, // timestamp
            end: 1, // timestamp
            flag: 1, // timestamp
            entrys : [],
            items : [],
        }
        // todo : entry cache
    }
    componentDidMount(){
        getData().then((data)=>{
            this.setState(data)
        })
    }
    changeDay(day) {
        this.setState({ day })
        // let us know where is the new record should add to
    }
    handleAdd(item) {
        const items = this.state.items
        item.id = App.nextTid++
        items.push(item)
        saveData("item",item)
        this.setState({ items })
        // change flag & save a record
    }
    updateEntry(tid,entry, grade) {
        // find entry and update
        let { entrys } = this.state
        if (!entry.id){
            entry.updateAt = 0
            entry.tid = tid
            entry.grade = grade
            entry.id = App.nextId++
            entrys.push(entry)
            
            saveData("entry",entry)
            //post
        }
        else {
            for (let e of entrys) {
                if (e.id === entry.id){
                    e.grade = grade
                    e.updateAt = (new Date()).getTime()
                    saveData("entry",e)
                    // put
                }
            }
        }
        this.setState({ entrys })
        // todo : immutable ? rollback ?
    }
    render() {
        let { name, grade, type } = this.props
        let { flag, entrys,items } = this.state
        return (<div>
            <Days onChangeDay={this.changeDay} />
            <List items={items} entrys={entrys} onEntryUpdate={this.updateEntry} />
            <AddButton onAdd={this.handleAdd} />
        </div>)
    }
}
App.PropTypes = {
    // grade: PropTypes.number,
}
App.nextTid = 4
App.nextId = 13
export default App;