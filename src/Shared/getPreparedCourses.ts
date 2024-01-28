import { CourseType, AcademyPresentCaseEnumType } from '../@types/'

import { getFilteredActiveCoursesModules } from './getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from './getFilteredActiveQuestions'
import { getValidatedCourses } from './getValidatedCourses'
import { getOptionsShuffled } from './getOptionsShuffled'
import { getProdidevAnswerDefault } from './getProdidevAnswerDefault'
import { getChainedResponsibility } from './getChainedResponsibility'
import { getQuestionsPickedRandomly } from '../Shared/getQuestionsPickedRandomly'

export type GetPreparedCoursesParamsType = CourseType[]

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
  courses: CourseType[],
  options
) => {
  let coursesNext: CourseType[] = []
  // let caseScenario: AcademyPresentCaseEnumType =
  //   AcademyPresentCaseEnumType['courseFirstLoading']

  try {
    /* Case: use the whole courses set from API call */
    // caseScenario = AcademyPresentCaseEnumType['courseFirstLoading']

    coursesNext =
      // .exec(getProvidedSearchString)
      getChainedResponsibility(courses)
        .exec(getValidatedCourses)
        .exec(getFilteredActiveCoursesModules)
        .exec(getFilteredActiveQuestions)
        .exec(getQuestionsPickedRandomly)
        // .exec(getProvidedID)
        // .exec(getProvidedSelectedDefault)
        .exec(getProdidevAnswerDefault)
        .exec(getOptionsShuffled).result

    if (options?.printRes) {
      console.log('getPreparedCourses', { coursesNext })
    }
  } catch (error: any) {
    console.log('getPreparedCourses', 'Error', {
      'error.message': error.message,
      courses,
    })
  } finally {
    return coursesNext
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
