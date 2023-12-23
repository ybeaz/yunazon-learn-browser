import { CourseType, AcademyPresentCaseEnumType } from '../@types/'

import { getFilteredActiveCoursesModules } from './getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from './getFilteredActiveQuestions'
import { getValidatedCourses } from './getValidatedCourses'
import { getOptionsShuffled } from './getOptionsShuffled'
import { getProdidevAnswerDefault } from './getProdidevAnswerDefault'
import { getChainedResponsibility } from './getChainedResponsibility'
import { getQuestionsPickedRandomly } from '../Shared/getQuestionsPickedRandomly'
import { getLocalStorageReadKeyObj } from './getLocalStorageReadKeyObj'
import { getCheckedCoursesAnswered } from './getCheckedCoursesAnswered'

export type GetPreparedCoursesParamsType = CourseType[]

export type GetPreparedCoursesResType = {
  courses: CourseType[]
  academyPresentCase: AcademyPresentCaseEnumType
}

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
  let academyPresentCase: AcademyPresentCaseEnumType =
    AcademyPresentCaseEnumType['courseFirstLoading']

  try {
    const coursesInProgress =
      getLocalStorageReadKeyObj('coursesInProgress') || []

    /* Case: use courseInProgress from the localStorage */
    if (
      coursesInProgress &&
      coursesInProgress.length &&
      courses.some(
        (item: CourseType) => item.courseID === coursesInProgress[0]?.courseID
      )
    ) {
      coursesNext = courses.map((course: CourseType) => {
        const { courseID } = course

        const courseInProgressFound = coursesInProgress.find(
          (course: CourseType) => course.courseID === courseID
        )

        let output = course
        if (courseInProgressFound) output = courseInProgressFound

        return output
      })

      academyPresentCase = AcademyPresentCaseEnumType['courseInProgress']
      const isAnswered = getCheckedCoursesAnswered(coursesNext)
      if (isAnswered)
        academyPresentCase = AcademyPresentCaseEnumType['courseCompleted']
    } else {
      /* Case: use the whole courses set from API call */
      academyPresentCase = AcademyPresentCaseEnumType['courseFirstLoading']

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
    return { courses: coursesNext, academyPresentCase }
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
