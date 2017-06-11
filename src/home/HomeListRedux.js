// contants
export const SET_GRADE = "SET_GRADE"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SET_GRADE:
            let { item, record, grade, id, date } = action.payload
            let records = [...state.records]
            if (record.id) {
                record.grade = grade // todo : immuteble
                return {
                    ...state,
                    records,
                }
            }
            else {
                records.push({
                    id: id,
                    tid: item.id,
                    updateAt: new Date().getTime(), // todo : pure function
                    grade,
                    date,
                })
                return {
                    ...state,
                    records,
                }
            }
        default:
            return state
    }
}
// action creators
export function setGrade(item, record, grade, id, date) {
    return {
        type: SET_GRADE,
        payload: { item, record, grade, id, date },
    }
}