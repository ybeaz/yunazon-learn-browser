import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_THEME: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { globalVars } = store
  const globalVarsNext = { ...globalVars, theme: data }
  return { ...store, globalVars: globalVarsNext }
}
