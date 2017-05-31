export function test(){
    return ("indexedDB" in window)
}
export function save(){

}

var db = indexedDB.open("test",1);

db.onupgradeneeded = function(e) {
    console.log("Upgrading...");
}
 
db.onsuccess = function(e) {
    console.log("Success!");
    db = e.target.result;
}
 
db.onerror = function(e) {
    console.log("Error");
    console.dir(e);
}

if(!db.objectStoreNames.contains("firstOS")) {
     db.createObjectStore("firstOS");
}

var t = db.transaction(["firstOS"],"readwrite");

var store = t.objectStore("firstOS");

var o = {p: 123};

var request = store.add(o);

request.onerror = function(e) {
     console.log("Error",e.target.error.name);
    // error handler
}

request.onsuccess = function(e) {
    console.log("数据添加成功！");
}