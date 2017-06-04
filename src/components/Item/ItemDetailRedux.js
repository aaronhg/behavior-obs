// contants
export const SAVE_ITEM = "SAVE_ITEM"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            let { id } = action.payload
            let items = state.items
            if (id < state.nextid.items) { // exist
                let i = state.items.filter(i => i.id === id)[0]
                i.name = action.payload.name
                i.bgcolor = action.payload.bgcolor
                i.type = action.payload.type
            } else {
                items = [...state.items, action.payload]
            }
            // todo immutable
            return {
                ...state,
                items: items,
                nextid: {
                    ...state.nextid,
                    items: id + 1,
                },
            }
        default:
            return state
    }
}
// action creators
export function saveItem(item) {
    return {
        type: SAVE_ITEM,
        payload: item,
    }
}