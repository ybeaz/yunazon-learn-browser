/**
 * @description Function to detect and return current/isActiveTemp module
 * @returns
 */
export const getCurrentCourseModule: Function = (courses: any[]): any => {
  const courseCurrent = courses.find(course => course.isActiveTemp === true)
  let moduleCurrentNext: any = { questions: [] }
  if (courseCurrent) {
    const {
      courseID,
      capture: captureCourse,
      description: descriptionCourse,
      meta,
    } = courseCurrent
    moduleCurrentNext = courseCurrent.modules.find(
      (module: any) => module.isActiveTemp === true
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
