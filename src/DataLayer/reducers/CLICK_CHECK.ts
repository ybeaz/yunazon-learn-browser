import { IRootStore } from '../../Interfaces/IRootStore'
import { getOptionsClickedByID } from '../../Shared/getOptionsClickedByID'

export const CLICK_CHECK: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { optionID, multi } = data
  const { courses } = store
  const coursesNext = getOptionsClickedByID(courses, optionID, multi)
  const storeNext = { ...store, courses: coursesNext }
  return storeNext
}
