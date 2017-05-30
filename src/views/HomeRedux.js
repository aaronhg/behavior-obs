import { combineReducers } from 'redux'
import addItemReducer, { ADD_ITEM } from '../components/Home/AddButtonRedux'
import listReducer, { SET_GRADE } from '../components/Home/ListRedux'
import dayFilterReducer, { SET_ENTRY_FILTER_BY_DAY } from '../components/Home/DayFilterRedux'
import { createReducer } from '../redux/utils'

// initial state
const initialState = {
    entryFilter : ()=>true,
    items: [],
    itemDefaultValue: {},
    entrys: [],
}
export default createReducer(initialState, {
    [ADD_ITEM]: addItemReducer,
    [SET_GRADE]: listReducer,
    [SET_ENTRY_FILTER_BY_DAY]: dayFilterReducer,
})
export * as addActions from '../components/Home/AddButtonRedux'
export * as listActions from '../components/Home/ListRedux'
export * as dayFilterActions from '../components/Home/DayFilterRedux'