// import addItemReducer, { ADD_ITEM } from '../components/Home/AddButtonRedux'
import listReducer, { SET_GRADE } from '../components/Home/ListRedux'
import dayFilterReducer, { SET_ENTRY_FILTER_BY_DAY, dayFilterCreator } from '../components/Home/DayFilterRedux'

// todo : 提到 App 這層，不然會一直重載
const LOAD_DATA = "LOAD_DATA"
function loadData(data) {
    return {
        type: LOAD_DATA,
        payload: { data },
    }
}
function homeReducer(state, action) {
    switch (action.type) {
        case LOAD_DATA:
            let { data } = action.payload
            return {
                ...state,
                items: data.items,
                entrys: data.entrys,
                nextid: data.nextid,
            }
        default:
            return state
    }
}
export default {
    [LOAD_DATA]: homeReducer,
    [SET_GRADE]: listReducer,
    [SET_ENTRY_FILTER_BY_DAY]: dayFilterReducer,
}
export var homeActions = { loadData }
export * as listActions from '../components/Home/ListRedux'
export * as dayFilterActions from '../components/Home/DayFilterRedux'