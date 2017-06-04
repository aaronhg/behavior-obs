import { dayFilterCreator } from '../components/Home/DayFilterRedux'
import moment from 'moment'

// initial state
export default {
    entryFilter: { 
        fn : dayFilterCreator(0),
        text : "Today",
        value : moment().format('YYYY/MM/DD'),
    },
    items: [],
    itemDefaultValue: {},
    entrys: [],
    nextid: {
        items: 1,
        entrys: 1,
    },
}