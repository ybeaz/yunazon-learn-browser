import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ADD_COURSE_CREATE_DATA: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courseCreateProgress } = store

  let courseCreateProgressNext = {
    ...courseCreateProgress,
    ...data,
  }

  return {
    ...store,
    courseCreateProgress: courseCreateProgressNext,
  }
}
