/**
 * @description Funciton to cut courses list
 */

export const getCutCoursesList = (courses: any[]): any[] => {
  const firstPart = courses.slice(0, 11)
  const lastPart = courses.slice(-2)

  return [...firstPart, ...lastPart]
}
