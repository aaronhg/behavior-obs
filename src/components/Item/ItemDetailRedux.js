// contants
export const ADD_ITEM = "ADD_ITEM"
// reducer
export default (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let { id } = action.payload
            return {
                ...state,
                items: [...state.items, action.payload],
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
export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}