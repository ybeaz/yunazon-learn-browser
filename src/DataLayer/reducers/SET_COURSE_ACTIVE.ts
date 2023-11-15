import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_COURSE_ACTIVE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { readCourse } = data
  return { ...store, courseActive: readCourse }
}
