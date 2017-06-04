import itemDetailReducer, { ADD_ITEM } from '../components/Item/ItemDetailRedux'

export default {
    [ADD_ITEM]: itemDetailReducer,
}
export * as itemDetailActions from '../components/Item/ItemDetailRedux'