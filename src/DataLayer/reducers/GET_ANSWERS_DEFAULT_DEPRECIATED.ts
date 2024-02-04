import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffledDepreciated } from '../../Shared/getOptionsShuffledDepreciated'
import { getProdidevAnswerDefaultDepreciated } from '../../Shared/getProdidevAnswerDefaultDepreciated'

export const GET_ANSWERS_DEFAULT_DEPRECIATED: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store
  let coursesNext = getProdidevAnswerDefaultDepreciated(courses)
  coursesNext = getOptionsShuffledDepreciated(coursesNext)
  return { ...store, courses: coursesNext }
}
