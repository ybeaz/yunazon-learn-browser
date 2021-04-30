import { IRootStore } from '../../Interfaces/IRootStore'
import { getProvidedActiveDefault } from '../../Shared/getProvidedActiveDefault'
import { getModuleActiveByContentID } from '../../Shared/getModuleActiveByContentID'

export const SELECT_COURSE_MODULE_CONTENTID: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { contentID } = data
  const { courses } = store
  let coursesNext = getProvidedActiveDefault(courses)
  coursesNext = getModuleActiveByContentID(courses, contentID)
  return { ...store, courses: coursesNext }
}
