import { RootStoreType, UrlParamsQueryType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_URLPARAMSQUERY_TO_STORE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const propName = data && data?.propName
  const value = data && data?.value

  const { urlParamsQuery } = store

  let urlParamsQueryNext: UrlParamsQueryType = { ...urlParamsQuery }

  if (propName && value !== undefined)
    urlParamsQueryNext = { ...urlParamsQueryNext, [propName]: value }

  return { ...store, urlParamsQuery: urlParamsQueryNext }
}
