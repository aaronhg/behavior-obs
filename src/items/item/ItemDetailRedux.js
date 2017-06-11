// contants
export const SAVE_ITEM = "SAVE_ITEM"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SAVE_ITEM:
            let item = action.payload
            let items = state.items
            let i = state.items.filter(i => i.id === id)[0]
            if (i) {
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