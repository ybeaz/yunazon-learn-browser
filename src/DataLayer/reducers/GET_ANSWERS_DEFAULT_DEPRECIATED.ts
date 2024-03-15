import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffledDepreciated } from '../../Shared/getOptionsShuffledDepreciated'
import { getProdidedAnswerDefaultDepreciated } from '../../Shared/getProdidedAnswerDefaultDepreciated'

export const GET_ANSWERS_DEFAULT_DEPRECIATED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store
  let coursesNext = getProdidedAnswerDefaultDepreciated(courses)
  coursesNext = getOptionsShuffledDepreciated(coursesNext)
  return { ...store, courses: coursesNext }
}
