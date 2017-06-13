import moment from 'moment'
export function filterCreator(date) {
    return (record) => record.date == date
}
// export function dateFilterCreator(day){
//     let d = /\d{4}\/\d{2}\/\d{2}/.test(day) ? new Date(day) : new Date()
//     return filterCreator({
//         startAt: d.setHours(day * 24 + 0, 0, 0, 0),
//         endAt: d.setHours(23, 59, 59, 999),
//     })
// }
export function day2date(day){
    let d = new Date()
    d.setHours(day * 24 + 0, 0, 0, 0)
    return moment(d).format("YYYY/MM/DD")
}
// contants
export const SET_RECORD_FILTER_BY_DAY = "SET_RECORD_FILTER_BY_DAY"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SET_RECORD_FILTER_BY_DAY:
            let { day } = action.payload
            return {
                ...state,
                recordFilter: { 
                    fn : filterCreator(day2date(day)),
                    value : day2date(day),
                },
            }
        default:
            return state
    }
}
// action creators
export function setRecordFilterByDay(day) {
    return {
        type: SET_RECORD_FILTER_BY_DAY,
        payload: { day },
    }
}