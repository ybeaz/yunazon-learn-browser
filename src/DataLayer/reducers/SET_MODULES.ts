import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { ModuleType } from 'yourails_common'

export const SET_MODULES: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { isLoaded } = store

  /* Making mediaLoaded false for each moduleID by default */
  const mediaLoadedNext = data.reduce((accum: Record<string, boolean>, module: ModuleType) => {
    const { moduleID } = module
    return { ...accum, [moduleID]: false }
  }, {})

  const isLoadedNext = {
    ...isLoaded,
    mediaLoaded: mediaLoadedNext,
  }

  const storeNext = { ...store, modules: data, isLoaded: isLoadedNext }

  return storeNext
}
