import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_THEME: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, theme: data }
  return { ...store, globalVars: globalVarsNext }
}
