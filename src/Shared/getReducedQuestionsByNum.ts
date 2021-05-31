import { getLimitedArrayElemsRandomly } from './getLimitedArrayElemsRandomly'

interface IOptions {
  courseIDIn: string
  indexIn: number
}

/**
 * @description Function to reduce course questions by number, pick up randomly
 */
export const getReducedQuestionsByNum: Function = (
  courses: any[],
  { courseIDIn, indexIn }: IOptions = { courseIDIn: 'all', indexIn: 0 }
): any[] => {
  return courses.map(course => {
    const { courseID, questionNumber, modules } = course

    let modulesNext = modules

    if (courseIDIn === undefined || courseIDIn === courseID) {
      modulesNext = modules.map(module => {
        const { index, questions } = module

        let questionsNext = questions
        if (
          (courseIDIn === undefined || indexIn === index) &&
          typeof questionNumber === 'number'
        ) {
          questionsNext = getLimitedArrayElemsRandomly(
            questions,
            questionNumber
          )
        }
        return { ...module, questions: questionsNext }
      })
    }
    return { ...course, modules: modulesNext }
  })
}
