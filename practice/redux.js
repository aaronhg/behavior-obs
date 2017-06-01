import {createStore,combineReducers} from 'redux'
var app = document.createElement("div");
document.body.appendChild(app);
// var app2 = document.createElement("div");
// document.body.appendChild(app2);
function setData(data){
    app.innerHTML = JSON.stringify(data)
}
var actions = [{
    type: "action1",
}, {
    type: "action2",
}]
var store = createStore(combineReducers({
    state1 : (state=0, action) => {
        console.log(action)
        return state+1
    },
    state2 : (state, action) => Object.assign({},state,{action}),
}))
var unsubscribe = store.subscribe(()=>setData(store.getState()))

store.dispatch(actions[0])
store.dispatch(actions[1])
store.dispatch(actions[0])

//----------------------------------------------------------------------------------------------------------
// {"state1":4,"state2":{"action":{"type":"action1"}}} 
// todo : why 4 ?