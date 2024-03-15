import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const GET_COURSES_SUCCESS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { isLoaded } = store
  const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
  let storeNext = { ...store, courses: data, isLoaded: isLoadedNext }

  return storeNext
}
