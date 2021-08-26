import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_OAUTH_STAGE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { componentsState } = store
  const componentsStateNext = {
    ...componentsState,
    oAuthStage: data,
  }
  console.info('SET_OAUTH_STAGE [12]', { data })
  return { ...store, componentsState: componentsStateNext }
}
