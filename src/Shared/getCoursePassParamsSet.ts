import { CourseType, ModuleType } from '../@types/GraphqlTypes'
import { getLimitedArrayElemsRandomly } from './getLimitedArrayElemsRandomly'

interface GetCoursePassParamsSetInterface {
  (
    courses: CourseType[],
    options: {
      courseIDIn?: string
      indexIn?: number
      moduleIDIn?: string
      questionNumberIn: number | undefined
      passRateIn: number | undefined
    }
  ): any[]
}

/**
 * @description Function to reduce course questions by number, pick up randomly
 */
export const getCoursePassParamsSet: GetCoursePassParamsSetInterface = (
  courses: CourseType[],
  { courseIDIn, indexIn, moduleIDIn, questionNumberIn, passRateIn } = {
    courseIDIn: 'all',
    indexIn: 0,
    moduleIDIn: undefined,
    questionNumberIn: undefined,
    passRateIn: undefined,
  }
) => {
  return courses.map(course => {
    const { courseID, questionNumber, modules, passRate } = course
    let questionNumberNext =
      questionNumberIn && typeof questionNumberIn === 'number'
        ? questionNumberIn
        : questionNumber

    questionNumberNext = questionNumberNext > 1 ? questionNumberNext : 2

    let modulesNext: ModuleType[] = modules || []

    if ((!courseIDIn || courseIDIn === courseID) && !moduleIDIn) {
      modulesNext = modulesNext.map(module => {
        const { index, questions } = module

        let questionsNext = questions
        if (
          (courseIDIn === undefined || indexIn === index) &&
          typeof questionNumberNext === 'number'
        ) {
          questionsNext = getLimitedArrayElemsRandomly(
            questions,
            questionNumberNext
          )
        }
        return { ...module, questions: questionsNext }
      })
    } else if (moduleIDIn) {
      modulesNext = modulesNext.map(module => {
        const { moduleID, index, questions } = module

        let questionsNext = questions
        if (
          (courseIDIn === undefined || moduleIDIn === moduleID) &&
          typeof questionNumberNext === 'number'
        ) {
          questionsNext = getLimitedArrayElemsRandomly(
            questions,
            questionNumberNext
          )
        }
        return { ...module, questions: questionsNext }
      })
    }

    const passRateNext = !!passRateIn ? passRateIn : passRate

    return { ...course, passRate: passRateNext, modules: modulesNext }
  })
}
