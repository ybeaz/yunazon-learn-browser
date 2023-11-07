import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_GLOBAL_VARS_SUCCESS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { globalVars, isLoaded } = store
  const globalVarsNext = { ...globalVars, ...data }
  const isLoadedNext = { ...isLoaded, isLoadedGlobalVars: true }
  const storeNext = {
    ...store,
    globalVars: globalVarsNext,
    isLoaded: isLoadedNext,
  }
  return storeNext
}
