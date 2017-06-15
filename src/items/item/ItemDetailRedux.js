import { push } from 'react-router-redux'
// contants
export const SAVE_ITEM = "SAVE_ITEM"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            let { item } = action.payload
            let items = [...state.items]
            var i = items.filter((i) => i.id == item.id)[0]
            if (i) {
                items.splice(items.indexOf(i), 1);
                item = {
                    ...i,
                    ...item,
                }
            }
            let tags = [...state.tags]
            if (item.ref_tags && item.ref_tags.length) {
                let max = item.ref_tags.length
                for (let j=0; j < max; j++) {
                    let id = item.ref_tags[j].id
                    let e = tags.find((e) => e.id == id)
                    if (!e) {
                        e = item.ref_tags[j]
                        tags.push(e)
                    }
                    if (!e.ref_items)
                        e.ref_items = []
                    if (!e.ref_items.find(r => r.id == item.id))
                        e.ref_items.push({
                            id: item.id,
                        })
                }
            }
            items.push(item)
            return {
                ...state,
                tags,
                items,
            }
        default:
            return state
    }
}
// action creators
export function saveItem(item) {
    return {
        type: SAVE_ITEM,
        payload: { item },
    }
}
// export function gotoItems() {
//     return push('/items')
// }