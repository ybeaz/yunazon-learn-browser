import { getLocalStorageSetObjTo } from './getLocalStorageSetObjTo'

export type GetLocalStorageDeletedCourseParamsType = string

export type GetLocalStorageDeletedCourseOptionsType = { printRes?: boolean }

export type GetLocalStorageDeletedCourseResType = void

interface GetLocalStorageDeletedCourseType {
  (
    courseID?: GetLocalStorageDeletedCourseParamsType,
    options?: GetLocalStorageDeletedCourseOptionsType
  ): GetLocalStorageDeletedCourseResType
}

/**
 * @description Function to getLocalStorageDeletedCourse
 * @run ts-node src/shared/utils/getLocalStorageDeletedCourse.ts
 * @import import { getLocalStorageDeletedCourse } from '../Shared/getLocalStorageDeletedCourse'
 */

export const getLocalStorageDeletedCourse: GetLocalStorageDeletedCourseType = (
  courseID,
  options
) => {
  try {
    const coursesInProgress = JSON.parse(
      localStorage.getItem('coursesInProgress') || '[]'
    )
    if (courseID && coursesInProgress && coursesInProgress.length) {
      const coursesInProgressNext = coursesInProgress.filter(
        (course: any) => course?.courseID !== courseID
      )
      getLocalStorageSetObjTo({
        coursesInProgress: JSON.stringify(coursesInProgressNext),
      })
    }

    if (options?.printRes) {
      console.log('getLocalStorageDeletedCourse', { courseID })
    }
  } catch (error: any) {
    console.log('getLocalStorageDeletedCourse', 'Error', error.message)
  } finally {
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  const input = ''
  const outout = getLocalStorageDeletedCourse(input, { printRes: true })
  console.log('getConvertedType [48]', { input, outout })
}
