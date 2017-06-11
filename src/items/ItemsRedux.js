import itemDetailReducer, { SAVE_ITEM } from './item/ItemDetailRedux'

export default {
    [SAVE_ITEM]: itemDetailReducer,
}
export * as itemDetailActions from './item/ItemDetailRedux'