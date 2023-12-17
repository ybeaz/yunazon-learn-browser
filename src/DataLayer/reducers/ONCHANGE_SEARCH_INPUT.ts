import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export const ONCHANGE_SEARCH_INPUT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const nextForms = {
    ...forms,
    searchInput: data,
  }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'search',
    searchParamsValue: data,
  }
  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  return { ...store, forms: nextForms }
}
