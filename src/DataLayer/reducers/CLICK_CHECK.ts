import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsClickedByID } from '../../Shared/getOptionsClickedByID'

export const CLICK_CHECK: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { optionID, multi } = data
  const { courses } = store
  const coursesNext = getOptionsClickedByID(courses, optionID, multi)
  const storeNext = { ...store, courses: coursesNext }
  return storeNext
}
