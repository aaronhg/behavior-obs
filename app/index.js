
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var app = document.createElement("div");
document.body.appendChild(app);

// var entrys = [
//     {id:10, updateAt: null ,name: 'a',tid:0, grade: null ,type:'face',order:1},
//     {id:11, updateAt: 1495198709,name: 'b',tid:1, grade: -1 ,type:'face',order:2},
//     {id:12, updateAt: 1495198710,name: 'c',tid:2, grade: 2 ,type:'number',order:3},
// ];
// ReactDOM.render(<h1>hello 2</h1>,app);
ReactDOM.render( <App />, app);