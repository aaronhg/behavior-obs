import { dayFilterCreator } from '../components/Home/DayFilterRedux'
import moment from 'moment'

// initial state
export default {
    entryFilter: {
        fn: dayFilterCreator(0),
        value: moment().format('YYYY/MM/DD'),
    },
    items: [{
        id: uuid,
        name,
        bgcolor,
        gtype,
        ref_tags: [{
            id,
            name,
        }],
        weight,
        order,
        update_at,
    }],
    records: [{
        id: uuid,
        ref_item_id,
        date,
        stared,
        grade,
        memo,
        ref_ttags: [{
            id,
            name,
        }],
        update_at,
    }],
    // tags: [{
    //     id: uuid,
    //     name,
    //     ref_items: [{
    //         id,
    //     }],
    //     update_at,
    // }],
    // ttags: [{
    //     id: uuid,
    //     name,
    //     ref_records: [{
    //         id,
    //     }],
    //     update_at,
    // }],
}