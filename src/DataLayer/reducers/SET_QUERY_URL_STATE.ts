import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_QUERY_URL_STATE: ReducerType = (
  store: RootStoreType,
  data: { query: RootStoreType['queryUrl'] }
): RootStoreType => {
  return { ...store, queryUrl: data.query }
}
