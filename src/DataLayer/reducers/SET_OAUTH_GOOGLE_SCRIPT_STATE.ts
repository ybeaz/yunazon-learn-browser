import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_OAUTH_GOOGLE_SCRIPT_STATE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isOAuthGoogleScriptLoaded: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
