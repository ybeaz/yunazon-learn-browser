import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_OAUTH_STATE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    oAuthStage: data,
  }
  return { ...store, componentsState: componentsStateNext }
}
