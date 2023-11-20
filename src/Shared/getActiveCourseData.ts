import { CourseType, ModuleType, QuestionType } from '../@types/GraphqlTypes'

type ModuleActive = ModuleType | { moduleID: undefined; contentID: undefined }

const courseActiveDefault: CourseType = {
  capture: '',
  /** courses ID */
  courseID: '',
  /** courses created date */
  dateCreated: 1,
  /** courses deleted date */
  dateDeleted: undefined,
  /** courses updated date */
  dateUpdated: 1,
  /** course description */
  description: '',
  /** isActive */
  isActive: false,
  /** language code */
  language: '',
  /** courses meta information */
  meta: {
    email: '',
    institution: '',
    isSendingBcc: false,
    specName: '',
    specTitle: '',
  },
  /** courses modules */
  modules: [],
  /** courses passRate */
  passRate: 1.0,
  /** courses questionNumber */
  questionNumber: 1,
}

export type GetActiveCourseDataResType = {
  courseActive: CourseType
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
    courseActive: courseActiveDefault,
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
