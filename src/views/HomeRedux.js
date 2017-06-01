import { combineReducers } from 'redux'
import addItemReducer, { ADD_ITEM } from '../components/Home/AddButtonRedux'
import listReducer, { SET_GRADE } from '../components/Home/ListRedux'
import dayFilterReducer, { SET_ENTRY_FILTER_BY_DAY, dayFilterCreator } from '../components/Home/DayFilterRedux'
import { createReducer } from '../redux/utils'
import moment from 'moment'

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
// initial state
const initialState = {
    entryFilter: { 
        fn : dayFilterCreator(0),
        text : "Today",
        value : moment().format('YYYY/MM/DD'),
    },
    items: [],
    itemDefaultValue: {},
    entrys: [],
    nextid: {
        items: 1,
        entrys: 1,
    },
}
export default createReducer(initialState, {
    [LOAD_DATA]: homeReducer,
    [ADD_ITEM]: addItemReducer,
    [SET_GRADE]: listReducer,
    [SET_ENTRY_FILTER_BY_DAY]: dayFilterReducer,
})
export var homeActions = { loadData }
export * as addActions from '../components/Home/AddButtonRedux'
export * as listActions from '../components/Home/ListRedux'
export * as dayFilterActions from '../components/Home/DayFilterRedux'