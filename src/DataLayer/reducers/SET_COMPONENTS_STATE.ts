import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

export const SET_COMPONENTS_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsStateProp, value } = data
  const { componentsState } = store
  const componentsStateNext: any = {
    ...componentsState,
    [componentsStateProp]: value,
  }
  const storeNext = { ...store, componentsState: componentsStateNext }

  if (componentsStateProp === 'modulesSearchApplied') {
    const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
      searchParamsName: 'modulesSearch',
      searchParamsValue: value,
    }

    getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
  } else if (componentsStateProp === 'tagsSearchApplied') {
    const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
      searchParamsName: 'tagsSearch',
      searchParamsValue: value,
    }

    getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
  }

  return storeNext
}
