import { CoursesConnectionType, CourseType } from '../@types/GraphqlTypes'

import { getFilteredActiveCoursesModules } from './getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from './getFilteredActiveQuestions'
import { getProvidedSearchString } from './getProvidedSearchString'
import { getValidatedCourses } from './getValidatedCourses'
import { getOptionsShuffled } from './getOptionsShuffled'
import { getProdidevAnswerDefault } from './getProdidevAnswerDefault'
import { getProvidedSelectedDefault } from './getProvidedSelectedDefault'
import { getProvidedID } from './getProvidedID'
import { getChainedResponsibility } from './getChainedResponsibility'
import { getMappedConnectionToRes } from './getMappedConnectionToRes'

export type GetPreparedCoursesParamsType = CoursesConnectionType

export type GetPreparedCoursesResType = CourseType[]

interface GetPreparedCoursesType {
  (
    params: GetPreparedCoursesParamsType,
    options?: { printRes: boolean }
  ): GetPreparedCoursesResType
}

/**
 * @description Function to getPreparedCourses
 * @run ts-node src/shared/utils/getPreparedCourses.ts
 * @import import { getPreparedCourses } from '../../Shared/getPreparedCourses'
 */

export const getPreparedCourses: GetPreparedCoursesType = (
  readCoursesConnection,
  options
) => {
  let coursesNext: CourseType[] = []

  try {
    coursesNext = getChainedResponsibility(readCoursesConnection)
      .exec(getValidatedCourses)
      .exec(getFilteredActiveCoursesModules)
      .exec(getFilteredActiveQuestions)
      .exec(getProvidedID)
      .exec(getProvidedSelectedDefault)
      .exec(getProdidevAnswerDefault)
      .exec(getOptionsShuffled)
      .exec(getProvidedSearchString).result

    if (options?.printRes) {
      console.log('getMappedConnectionToRes', { coursesNext })
    }
  } catch (error: any) {
    console.log('getMappedConnectionToRes', 'Error', error.message)
  } finally {
    return coursesNext
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
