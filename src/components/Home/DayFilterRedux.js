function dayFilterCreator({ startAt, endAt }) {
    return (entry) => startAt <= entry.updateAt && entry.updateAt <= endAt
}
// contants
export const SET_ENTRY_FILTER_BY_DAY = "SET_ENTRY_FILTER_BY_DAY"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SET_ENTRY_FILTER_BY_DAY:
            let { day } = action.payload
            let d = new Date()
            return {
                ...state,
                entryFilter: dayFilterCreator({
                    startAt: d.setHours(day * 24 + 0, 0, 0, 0),
                    endAt: d.setHours(23, 59, 59, 999),
                })
            }
        default:
            return state
    }
}
// action creators
export function setEntryFilterByDay(day) {
    return {
        type: SET_ENTRY_FILTER_BY_DAY,
        payload: { day },
    }
}