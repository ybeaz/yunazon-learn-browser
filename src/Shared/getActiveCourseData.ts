import { CourseType, ModuleType, QuestionType } from '../@types/GraphqlTypes'

type ModuleActive = ModuleType | { moduleID: undefined; contentID: undefined }

export type GetActiveCourseDataResType = {
  courseActive: CourseType | { courseID: ''; capture: '' }
  moduleActive: ModuleActive
  questionsActive: QuestionType[] | []
}

interface GetActiveCourseDataType {
  (
    courses: CourseType[],
    moduleIDActive: string | undefined
  ): GetActiveCourseDataResType
}

/**
 * @description Function to getActiveCourseData
 * @run ts-node src/shared/utils/getActiveCourseData.ts
 * @import import { getActiveCourseData } from './getActiveCourseData'
 */
export const getActiveCourseData: GetActiveCourseDataType = (
  courses: CourseType[],
  moduleIDActive: string | undefined
) => {
  const res: GetActiveCourseDataResType = {
    courseActive: { courseID: '', capture: '' },
    moduleActive: { moduleID: undefined, contentID: undefined },
    questionsActive: [],
  }

  if (!courses.length || !moduleIDActive) return res

  try {
    let courseActive: CourseType = courses[0]

    let moduleActive: ModuleActive = courses[0].modules
      ? courses[0].modules[0]
      : { moduleID: undefined, contentID: undefined }

    let questionsActive: QuestionType[] = courses[0].modules
      ? courses[0].modules[0].questions
      : []

    for (let course of courses) {
      const { modules } = course
      let isBreaking = false
      for (let module of modules || []) {
        const { moduleID } = module
        if (moduleID === moduleIDActive) {
          courseActive = course
          moduleActive = module
          isBreaking = true
          if (isBreaking) break
        }
      }
      if (isBreaking) break
    }

    // @ts-expect-error
    questionsActive = moduleActive?.questions ? moduleActive.questions : []

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
