import { combineReducers } from 'redux'
import addItemReducer , { ADD_ITEM } from '../components/Home/AddButtonRedux'
import {createReducer} from '../redux/utils'

// initial state
const initialState = {
    items: [],
    itemDefaultValue: {},
    entrys: [],
}
export default createReducer(initialState,{
    [ADD_ITEM] : addItemReducer,
})
// todo 
export * as addActions from '../components/Home/AddButtonRedux'