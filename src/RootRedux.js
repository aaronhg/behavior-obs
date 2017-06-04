// export const LOAD_DATA = "LOAD_DATA"
// function loadData(data) {
//     return {
//         type: LOAD_DATA,
//         payload: { data },
//     }
// }
// function rootReducer(state, action) {
//     switch (action.type) {
//         case LOAD_DATA:
//             let { data } = action.payload
//             return {
//                 ...state,
//                 items: data.items,
//                 entrys: data.entrys,
//                 nextid: data.nextid,
//             }
//         default:
//             return state
//     }
// }
// export default {
//     [LOAD_DATA]: rootReducer,
// }
// export var rootActions = { loadData }