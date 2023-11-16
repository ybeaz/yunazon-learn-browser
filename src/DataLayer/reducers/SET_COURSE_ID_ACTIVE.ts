import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_COURSE_ID_ACTIVE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courseID } = data

  const { scorm } = store

  const scormNext = { ...scorm, courseIDActive: courseID }

  return { ...store, scorm: scormNext }
}
