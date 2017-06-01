// contants
export const SET_GRADE = "SET_GRADE"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SET_GRADE:
            let { item, entry, grade, id, date } = action.payload
            let entrys = [...state.entrys]
            if (entry.id) {
                entry.grade = grade // todo : immuteble
                return {
                    ...state,
                    entrys,
                }
            }
            else {
                entrys.push({
                    id: id,
                    tid: item.id,
                    updateAt: new Date().getTime(), // todo : pure function
                    grade,
                    date,
                })
                return {
                    ...state,
                    entrys,
                    nextid: {
                        ...state.nextid,
                        entrys: id + 1,
                    }
                }
            }
        default:
            return state
    }
}
// action creators
export function setGrade(item, entry, grade, id, date) {
    return {
        type: SET_GRADE,
        payload: { item, entry, grade, id, date },
    }
}