import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffledDepreciated } from 'yourails_common'
import { getProdidedAnswerDefaultDepreciated } from 'yourails_common'

export const GET_ANSWERS_DEFAULT_DEPRECIATED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store
  let coursesNext = getProdidedAnswerDefaultDepreciated(courses)
  coursesNext = getOptionsShuffledDepreciated(coursesNext)
  return { ...store, courses: coursesNext }
}
