import { filterCreator } from '../home/DayFilterRedux'
import moment from 'moment'

// initial state
export default {
    recordFilter: {
        fn: filterCreator(moment().format('YYYY/MM/DD')),
        value: moment().format('YYYY/MM/DD'),
    },
    items: [{ "name": "item1", "bgcolor": "#ffc107", "gtype": "+-2", "id": "SJ1ryynfb", "ref_tags": [{ id: "SJ-ryynfb", "name": "tag1" }] }],
    // {
    //     id: uuid,
    //     name,
    //     bgcolor,
    //     gtype,
    //     ref_tags: [{
    //         id,
    //         name,
    //     }],
    //     weight,
    //     order,
    //     update_at,
    // }
    records: [{id: "jJEPr63f", ref_item_id : "SJ1ryynfb", date :"2017/06/13", star : 1, grade :2, memo:"123",ref_etags:[
        {"id":"HJEPr63f-","name":"etag1"}
    ]}],
    // {
    //     id: uuid,
    //     ref_item_id,
    //     date,
    //     star,
    //     grade,
    //     memo,
    //     ref_etags: [{
    //         id,
    //         name,
    //     }],
    //     update_at,
    // },
    tags: [{ id: "t1", name: "tag2", }, { id: "t2", name: "運動", }, { id: "SJ-ryynfb", "name": "tag1" ,ref_items:[{id:"SJ1ryynfb"}]}],
    // {
    //     id: uuid,
    //     name,
    //     ref_items: [{
    //         id,
    //     }],
    //     update_at,
    // }],
    etags: [{ id: "HJEPr63f-", name: "etag1" ,ref_records:[{id: "jJEPr63f"}]}],
    // {
    //     id: uuid,
    //     name,
    //     ref_records: [{
    //         id,
    //     }],
    //     update_at,
    // }],
}