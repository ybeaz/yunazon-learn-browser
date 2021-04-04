/**
 * @description Function to detect current/active module
 * @returns
 */
export const getCurrentCourseModule: Function = (courses: any[]): any => {
  const courseCurrent = courses.find(course => course.active === true)
  let moduleCurrentNext: any = { questions: [] }
  if (courseCurrent) {
    const {
      courseID,
      capture: captureCourse,
      description: descriptionCourse,
      meta,
    } = courseCurrent
    moduleCurrentNext = courseCurrent.modules.find(
      (module: any) => module.active === true
    )

    moduleCurrentNext = {
      ...moduleCurrentNext,
      courseID,
      captureCourse,
      descriptionCourse,
      meta,
    }
  }
  return moduleCurrentNext
}
