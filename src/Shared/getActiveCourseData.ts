import { CourseType, ModuleType } from '../@types/GraphqlTypes'

interface GetActiveCourseData {
  courseActive: any
  moduleActive: any
  questionsActive: any[]
}

/**
 * @description Function to find isSelected module
 * @param courses
 * @returns IRgetActiveCourseData
 */
export const getActiveCourseData: Function = (
  courses: any[]
): GetActiveCourseData => {
  const res = {
    courseActive: { courseID: '', capture: '' },
    moduleActive: {},
    questionsActive: [],
  }

  try {
    const courseActive = courses.find(
      (course: any) => course.isSelected === true
    ) || {
      courseID: '',
      capture: '',
    }

    const moduleActive = courseActive?.modules
      ? courseActive?.modules.find((module: any) => module.isSelected === true)
      : {}

    const questionsActive = moduleActive?.questions
      ? moduleActive.questions
      : []

    return {
      courseActive,
      moduleActive,
      questionsActive,
    }
  } catch (error: any) {
    console.info('getActiveCourseData [34]', error.name + ': ' + error.message)
    return res
  }
}
