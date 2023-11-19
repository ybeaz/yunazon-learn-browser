import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_MEDIA_LOADED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { mediaKey, isMediaLoaded } = data

  const { isLoaded } = store
  const { mediaLoaded } = isLoaded

  const mediaLoadedNext = {
    ...mediaLoaded,
    [mediaKey]: isMediaLoaded,
  }

  const isLoadedNext = {
    ...isLoaded,
    mediaLoaded: mediaLoadedNext,
  }

  return { ...store, isLoaded: isLoadedNext }
}
