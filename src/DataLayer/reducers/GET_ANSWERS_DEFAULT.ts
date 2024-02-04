import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefaultDepreciated } from '../../Shared/getProdidevAnswerDefaultDepreciated'

export const GET_ANSWERS_DEFAULT: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { courses } = store
  let coursesNext = getProdidevAnswerDefaultDepreciated(courses)
  coursesNext = getOptionsShuffled(coursesNext)
  return { ...store, courses: coursesNext }
}
