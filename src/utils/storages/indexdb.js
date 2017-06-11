// export function test() {
//     return ("indexedDB" in window)
// }
// export function save() {

// }
export function setup() {

}
var db;
var request = indexedDB.open("MyTestDatabase");
db.onerror = function(event) {
  // Generic error handler for all errors targeted at this database's
  // requests!
  alert("Database error: " + event.target.errorCode);
};
request.onerror = function(event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function(event) {
  db = request.result;
};
// format
db.onupgradeneeded = function (e) {
    var storeCreatIndex = (s, obj) => {
        for (let k in obj) {
            if (obj.hasOwnProperty(k))
                s.createIndex(k, k, { unique: obj[k] })
        }
    }

    var os = e.currentTarget.result.createObjectStore("items", { keyPath: "id", autoIncrement: true })

    storeCreatIndex(os, {
        name: false,
        type: false,
        order: false,
        bgcolor: false,
    })

    var os = e.currentTarget.result.createObjectStore("records", { keyPath: "id", autoIncrement: true })

    storeCreatIndex(os, {
        name: false,
        type: false,
        order: false,
        bgcolor: false,
    })
}
db.onerror = function (e) {
    console.log("Error")
    console.dir(e)
}

//thunk
async function save() {
    // 
    let data = { title: "Food", price: "500", date: "2012/07/29", notes: "朋友聚餐吃太好..." }
    let diffs = [data, data]// todo
    let store = db.transaction(["account"], "readwrite").objectStore("account")
    for (let d of diffs) {
        await new Promise((res, rej) => {
            let add = store.add(d)
            add.onsuccess = () => res()
            add.onerror = () => rej(e.target.error.name)
        })
    }
            await new Promise((res, rej) => {
            let oc = store.openCursor()
            oc.onsuccess = (e) => {
               
                let result = e.target.result
                if (result &&                    result !== null) {
                    r[d][r[d].length] = result.value
                    result.continue();

                } else {

                    res()
                }
            }
            add.onerror = (e) => rej(e.target.error.name)
}
save().then(console.log, console.error)
