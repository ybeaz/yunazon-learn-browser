import { CourseType, AcademyPresentCaseEnumType } from '../@types/'

import { getFilteredActiveCoursesModulesDepreciated } from './getFilteredActiveCoursesModulesDepreciated'
import { getFilteredActiveQuestionsDepreciated } from './getFilteredActiveQuestionsDepreciated'
import { getValidatedCoursesDepreciated } from './getValidatedCoursesDepreciated'
import { getOptionsShuffledDepreciated } from './getOptionsShuffledDepreciated'
import { getProdidedAnswerDefaultDepreciated } from './getProdidedAnswerDefaultDepreciated'
import { getChainedResponsibility } from './getChainedResponsibility'
import { getQuestionsPickedRandomlyDepreciated } from '../Shared/getQuestionsPickedRandomlyDepreciated'

export type GetPreparedCoursesParamsType = CourseType[]

export type GetPreparedCoursesResType = CourseType[]

interface GetPreparedCoursesType {
  (params: GetPreparedCoursesParamsType, options?: { printRes: boolean }): GetPreparedCoursesResType
}

/**
 * @description Function to getPreparedCourses
 * @run ts-node src/shared/utils/getPreparedCourses.ts
 * @import import { getPreparedCourses } from '..'
 */

export const getPreparedCourses: GetPreparedCoursesType = (courses: CourseType[], options) => {
  let coursesNext: CourseType[] = []

  try {
    /* Case: use the whole courses set from API call */

    coursesNext =
      // .exec(getProvidedSearchString)
      getChainedResponsibility(courses)
        .exec(getValidatedCoursesDepreciated)
        .exec(getFilteredActiveCoursesModulesDepreciated)
        .exec(getFilteredActiveQuestionsDepreciated)
        .exec(getQuestionsPickedRandomlyDepreciated)
        // .exec(getProvidedID)
        // .exec(getProvidedSelectedDefault)
        .exec(getProdidedAnswerDefaultDepreciated)
        .exec(getOptionsShuffledDepreciated).result

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
