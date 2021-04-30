import { IRootStore } from '../../Interfaces/IRootStore'

export const GET_CONTENT_DATA_SUCCESS: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { isLoaded } = store
  const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
  const storeNext = { ...store, courses: data, isLoaded: isLoadedNext }
  return storeNext
}
