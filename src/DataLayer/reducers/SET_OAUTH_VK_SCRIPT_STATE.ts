import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_OAUTH_VK_SCRIPT_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isOAuthVKontakteScriptLoaded: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
