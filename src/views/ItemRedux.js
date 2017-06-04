import itemDetailReducer, { SAVE_ITEM } from '../components/Item/ItemDetailRedux'

export default {
    [SAVE_ITEM]: itemDetailReducer,
}
export * as itemDetailActions from '../components/Item/ItemDetailRedux'