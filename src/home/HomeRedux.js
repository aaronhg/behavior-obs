import listReducer, { SET_GRADE } from './HomeRedux'
import dayFilterReducer, { SET_RECORD_FILTER_BY_DAY, dayFilterCreator } from './DayFilterRedux'

export default {
    [SET_GRADE]: listReducer,
    [SET_RECORD_FILTER_BY_DAY]: dayFilterReducer,
}
export * as listActions from './HomeListRedux'
export * as dayFilterActions from './DayFilterRedux'