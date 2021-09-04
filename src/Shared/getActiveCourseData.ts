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
    courseActive: {},
    moduleActive: {},
    questionsActive: [],
  }

  try {
    const courseActive = courses.find(course => course.isSelected === true)

    const moduleActive = courseActive.modules.find(
      module => module.isSelected === true
    )

    const questionsActive = moduleActive?.questions
      ? moduleActive.questions
      : []

    return {
      courseActive,
      moduleActive,
      questionsActive,
    }
  } catch (error) {
    console.info('getActiveCourseData [34]', error.name + ': ' + error.message)
    return res
  }
}
