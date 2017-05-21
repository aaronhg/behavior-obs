
// todo : show info when save record is failed
var url = "http://localhost:3000"
async function getData({ start, end }) {
    let i = await fetch(`${url}/items`)
    let items = await i.json()
    let e = await fetch(`${url}/entrys?updateAt_gte=${start}&updateAt_lte=${end}`)
    let entrys = await e.json()
    return { entrys, items }
    // 抽象成 可以存 localstorge or restful
}
async function saveData(t, d) {
    let i = await fetch(`${url}/${t}s/${d.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(d),
    })
    d = await i.json()
    return d
    // id
    // error handling
}
export default { saveData , getData }