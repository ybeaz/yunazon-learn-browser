import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_OAUTH_FB_SCRIPT_STATE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    isOAuthFacebookScriptLoaded: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
