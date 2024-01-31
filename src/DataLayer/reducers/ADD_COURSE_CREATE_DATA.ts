import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ADD_COURSE_CREATE_DATA: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { moduleCreateProgress } = store

  let courseCreateProgressNext = {
    ...moduleCreateProgress,
    ...data,
  }

  return {
    ...store,
    moduleCreateProgress: courseCreateProgressNext,
  }
}
