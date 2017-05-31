// contants
var i = 11
export const SET_GRADE = "SET_GRADE"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SET_GRADE:
            let { item, entry, grade } = action.payload
            let entrys = [...state.entrys]
            if (entry.id === 0 || entry.id)
                entry.grade = grade // todo : immuteble
            else {
                entrys.push({
                    id: i++,
                    tid: item.id,
                    updateAt: new Date().getTime(),
                    grade,
                })
            }
            return {
                ...state,
                entrys,
            }
        default:
            return state
    }
}
// action creators
export function setGrade(item, entry, grade) {
    return {
        type: SET_GRADE,
        payload: { item, entry, grade },
    }
}