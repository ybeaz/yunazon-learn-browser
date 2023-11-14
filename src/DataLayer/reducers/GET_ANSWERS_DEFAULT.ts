import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../../Shared/getProdidevAnswerDefault'

export const GET_ANSWERS_DEFAULT: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { courses } = store
  let coursesNext = getProdidevAnswerDefault(courses)
  coursesNext = getOptionsShuffled(coursesNext)
  return { ...store, courses: coursesNext }
}
