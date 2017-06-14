export const LOAD_DATA = "LOAD_DATA"
export function loadData(data) {
    return {
        type: LOAD_DATA,
        payload: { data },
    }
}
function rootReducer(state, action) {
    switch (action.type) {
        case LOAD_DATA:
            let { data } = action.payload
            return {
                ...state,
                ...data,
            }
        default:
            return state
    }
}
export default {
    [LOAD_DATA]: rootReducer,
}