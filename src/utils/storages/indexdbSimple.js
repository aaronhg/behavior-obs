import 'babel-polyfill'
// 將資料存在 t 下，兩筆資料，items 及 records
var defaultConfig = {
    var: 1,
    onupgradeneeded: function (e) {
        var os = e.currentTarget.result.createObjectStore("t", { keyPath: "name" })
    },
}
var config
var setup = async function (con) {
    let dbObj = await new Promise((res, rej) => {
        // if (!db || config != con) { // create 
        let config = con || defaultConfig
        let db = indexedDB.open("xnal", config.ver)
        db.onsuccess = function (e) {
            res(e.currentTarget.result)
        }
        db.onerror = rej
        db.onupgradeneeded = config.onupgradeneeded
        // } else {
        //     res(db)
        // }
    })
    return dbObj
}
var getAll = async function getAll() {
    let db = await setup()
    let store = db.transaction(["t"], "readwrite").objectStore("t")
    let ds = ["items", "records"]
    let r = {}
    for (let d of ds) {
        await new Promise((res, rej) => {
            let get = store.get(d)
            get.onsuccess = (e) => {
                try {
                    r[d] = JSON.parse(e.target.result.value)
                } catch (error) {
                    r[d] = []
                }
                res()
            }
            get.onerror = (e) => rej(e.target.error.name)
        })
    }
    return r
}
var saveAll = async function saveAll(data) {
    let db = await setup()
    // let data = {
    //     items : [{ title: "Food", price: "500", date: "2012/07/29", notes: "朋友聚餐吃太好..." }],
    //     records : [{ title: "Food", price: "500", date: "2012/07/29", notes: "朋友聚餐吃太好..." }],
    // }
    let store = db.transaction(["t"], "readwrite").objectStore("t")
    store.clear()
    for (let key in data) {
        await new Promise((res, rej) => {
            let add = store.add({
                name: key,
                value: JSON.stringify(data[key])
            })
            add.onsuccess = res
            add.onerror = () => rej(e.target.error.name)
        })
    }
}
//save().then(console.log, console.error)
function test() {
    return ("indexedDB" in window)
}
export default {
    test,
    getAll,
    saveAll,
}