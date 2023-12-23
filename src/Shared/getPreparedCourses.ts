import { CoursesConnectionType, CourseType } from '../@types/GraphqlTypes'

import { getFilteredActiveCoursesModules } from './getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from './getFilteredActiveQuestions'
import { getValidatedCourses } from './getValidatedCourses'
import { getOptionsShuffled } from './getOptionsShuffled'
import { getProdidevAnswerDefault } from './getProdidevAnswerDefault'
import { getChainedResponsibility } from './getChainedResponsibility'
import {
  getQuestionsPickedRandomly,
  GetQuestionsPickedRandomlyParamsType,
} from '../Shared/getQuestionsPickedRandomly'

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

  try {
    const coursesInProgress = JSON.parse(
      localStorage.getItem('coursesInProgress') || '[]'
    )

    let caseDescription = ''

    /* Case: use courseInProgress from the localStorage */
    if (
      coursesInProgress &&
      coursesInProgress.length &&
      courses.some(
        (item: any) => item.courseID === coursesInProgress[0]?.courseID
      )
    ) {
      caseDescription = 'use courseInProgress from the localStorage'
      coursesNext = courses.map((course: any) => {
        const { courseID } = course

        const courseInProgressFound = coursesInProgress.find(
          (course: any) => course.courseID === courseID
        )

        let output = course
        if (courseInProgressFound) output = courseInProgressFound

        return output
      })
    } else {
      /* Case: use the whole courses set from API call */
      caseDescription = 'use the whole courses set from API call'

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
    }

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
