import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsClickedByID } from '../../Shared/getOptionsClickedByID'

export const CLICK_CHECK: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { optionID, multi } = data
  const { courses } = store
  const coursesNext = getOptionsClickedByID(courses, optionID, multi)
  const storeNext = { ...store, courses: coursesNext }
  return storeNext
}
