// contants
export const SAVE_RECORD = "SAVE_RECORD"
// reducer
export default (state, action) => {
    switch (action.type) {
        case SAVE_RECORD:
            let { record } = action.payload
            let records = [...state.records]
            var r = records.filter((r) => r.id == record.id)[0]
            if (r) {
                records.splice(records.indexOf(r), 1);
                record = {
                    ...r,
                    ...record,
                }
            }
            let etags = [...state.etags]
            if (record.ref_etags && record.ref_etags.length) {
                let max = record.ref_etags.length
                for (let j=0; j < max; j++) {
                    let id = record.ref_etags[j].id
                    let e = etags.find((e) => e.id == id)
                    if (!e) {
                        e = record.ref_etags[j]
                        etags.push(e)
                    }
                    if (!e.ref_records)
                        e.ref_records = []
                    if (!e.ref_records.find(r => r.id == record.id))
                        e.ref_records.push({
                            id: record.id,
                        })
                }
            }
            // FP
            records.push(record)
            return {
                ...state,
                etags,
                records,
            }
        default:
            return state
    }
}
// action creators
export function saveRecord(record) {
    return {
        type: SAVE_RECORD,
        payload: { record },
    }
}