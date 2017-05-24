// import App from './App';
import dispatcher from './utils/dispatcher'
import events from 'events'
var app = document.createElement("div");
document.body.appendChild(app);

function setData(data){
    app.innerHTML = JSON.stringify(data)
}

var data = 0
var appStore = Object.create(events.EventEmitter, {
    getData: {
        // name: "getData",
        value: () => data,
    },
})
dispatcher.register(payload => {
    if (payload)
        appStore._data = 0
    else
        appStore._data++
    appStore.emit("change")
})

appStore.on("change", () => {
    let data = appStore.getData()
    setData({ data })
})

dispatcher.dispatch()
ReactDOM.render(<App />, app2)