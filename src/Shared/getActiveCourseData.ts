interface IRgetActiveCourseData {
  courseActive: any
  moduleActive: any
  questionsActive: any[]
}

/**
 * @description Function to find isActiveTemp module
 * @param courses
 * @returns IRgetActiveCourseData
 */
export const getActiveCourseData: Function = (
  courses: any[]
): IRgetActiveCourseData => {
  const res = {
    courseActive: {},
    moduleActive: {},
    questionsActive: [],
  }

  try {
    const courseActive = courses.find(course => course.isActiveTemp === true)

    const moduleActive = courseActive.modules.find(
      module => module.isActiveTemp === true
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
