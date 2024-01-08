import {
  CreateCourseStatusEnumType,
  RootStoreType,
  ReducerType,
} from '../../Interfaces/'

export const SET_COURSE_CREATE_STATUS: ReducerType = (
  store: RootStoreType,
  data: RootStoreType
): RootStoreType => {
  const { componentsState } = store
  const { createModuleStages } = componentsState

  return data
}
