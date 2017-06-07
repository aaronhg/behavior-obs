import { createReducer } from '../redux/utils'
import initialState from '../redux/initialState'
import homeReducerObj from '../views/HomeRedux'
import itemReducerObj from '../views/ItemRedux'
import mainReducerObj from '../mainRedux'

export default createReducer(initialState, {
    ...homeReducerObj,
    ...itemReducerObj,
    ...mainReducerObj,
})