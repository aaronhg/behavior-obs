import listReducer, { SAVE_RECORD } from './HomeListRedux'
import dayFilterReducer, { SET_RECORD_FILTER_BY_DAY } from './DayFilterRedux'

export default {
    [SAVE_RECORD]: listReducer,
    [SET_RECORD_FILTER_BY_DAY]: dayFilterReducer,
}
export * as listActions from './HomeListRedux'
export * as dayFilterActions from './DayFilterRedux'