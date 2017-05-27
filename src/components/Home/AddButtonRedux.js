// contants
export const ADD_ITEM = "ADD_ITEM"
// initial state
// const initialState = {
//     items: [],
//     itemDefaultValue: {},
//     entrys: [],
// }
// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
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
// export var actions = () => {
//     return {
//         type: 1
//     }
// }