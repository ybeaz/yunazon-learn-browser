import { getLimitedArrayElemsRandomly } from './getLimitedArrayElemsRandomly'

/**
 * @description Function to reduce course questions by number, pick up randomly
 */
export const getReducedQuestionsByNum: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { questionNumber, modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      let questionsNext = questions
      if (typeof questionNumber === 'number') {
        questionsNext = getLimitedArrayElemsRandomly(questions, questionNumber)
      }
      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
