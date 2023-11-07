import { IRootStore } from '../../Interfaces/IRootStore'
import { TOGGLE_MEDIA_LOADED } from './TOGGLE_MEDIA_LOADED'

export const GET_CONTENT_DATA_SUCCESS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { isLoaded } = store
  const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
  let storeNext = { ...store, courses: data, isLoaded: isLoadedNext }

  data.forEach(course => {
    const { modules } = course
    modules.forEach(module => {
      const { contentID: mediaKey } = module
      const dataToMediaLoaded = { mediaKey, isMediaLoaded: false }
      storeNext = TOGGLE_MEDIA_LOADED(storeNext, dataToMediaLoaded)
    })
  })

  return storeNext
}
