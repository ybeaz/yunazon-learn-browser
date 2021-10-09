import { IRootStore } from '../../Interfaces/IRootStore'

export const SET_THEME: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, theme: data }
  return { ...store, globalVars: globalVarsNext }
}
