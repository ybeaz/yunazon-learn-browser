import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export const SET_INPUT_SEARCH: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store

  const inputSearchNext = data
  const formsNext = { ...forms, inputSearch: inputSearchNext }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'search',
    searchParamsValue: data,
  }
  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  return { ...store, forms: formsNext }
}
