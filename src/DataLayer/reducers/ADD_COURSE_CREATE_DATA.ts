import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ADD_COURSE_CREATE_DATA: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courseCreateProgress } = store

  console.info('ADD_COURSE_CREATE_DATA [10]', { data })

  let courseCreateProgressNext = {
    ...courseCreateProgress,
    ...data,
  }

  return {
    ...store,
    courseCreateProgress: courseCreateProgressNext,
  }
}
