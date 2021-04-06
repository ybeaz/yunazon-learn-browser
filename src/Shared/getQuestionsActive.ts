/**
 * @description Function to find active module
 * @param courses
 * @returns
 */
export const getQuestionsActive: Function = (courses: any[]): any[] => {
  try {
    const courseActive = courses.find(course => course.active === true)

    const moduleActive = courseActive.modules.find(
      module => module.active === true
    )

    return moduleActive ? moduleActive.questions : []
  } catch (error) {
    return []
  }
}
