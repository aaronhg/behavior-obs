import { createReducer } from '../redux/utils'
import initialState from '../redux/initialState'
import mainReducerObj from '../app/MainRedux'
import itemsReducerObj from '../items/ItemsRedux'
import homeReducerObj from '../home/HomeRedux'

export default createReducer(initialState, {
    ...homeReducerObj,
    ...itemsReducerObj,
    ...mainReducerObj,
})