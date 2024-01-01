import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_MEDIA_LOADED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { mediaLoaded } = data

  const { isLoaded } = store

  const isLoadedNext = {
    ...isLoaded,
    mediaLoaded,
  }

  return { ...store, isLoaded: isLoadedNext }
}
