import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const TOGGLE_MEDIA_LOADED: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
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
