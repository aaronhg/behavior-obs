import { createReducer } from '../redux/utils'
import initialState from '../redux/initialState'
import homeReducerObj from '../views/HomeRedux'
import itemReducerObj from '../views/ItemRedux'

export default createReducer(initialState,{
    ...homeReducerObj,
    ...itemReducerObj,
})