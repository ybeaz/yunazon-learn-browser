import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_OAUTH_GOOGLE_SCRIPT_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isOAuthGoogleScriptLoaded: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
