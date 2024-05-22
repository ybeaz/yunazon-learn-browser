import { RootStoreType, FormsType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

export const SET_INPUT_TO_STORE: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const storeFormGroup = data && data?.storeFormGroup
  const storeFormProp = data && data?.storeFormProp
  const value = data && data?.value

  const { forms } = store

  let formsNext: any = { ...forms }
  if (storeFormGroup && storeFormProp && value !== undefined)
    formsNext = { ...forms, [storeFormGroup]: { [storeFormProp]: value } }
  else if (storeFormProp && value !== undefined) formsNext = { ...forms, [storeFormProp]: value }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: storeFormProp,
    searchParamsValue: formsNext[storeFormProp],
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
  return { ...store, forms: formsNext }
}
