import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_MEDIA_LOADED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { mediaKey, isMediaLoaded } = data

  const { isLoaded } = store
  const { mediaLoading } = isLoaded

  const mediaLoadingNext = {
    ...mediaLoading,
    [mediaKey]: isMediaLoaded,
  }

  const isLoadedNext = {
    ...isLoaded,
    mediaLoading: mediaLoadingNext,
  }

  return { ...store, isLoaded: isLoadedNext }
}
