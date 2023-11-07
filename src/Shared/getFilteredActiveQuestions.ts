/**
 * @description Function to filter NOT isActive questions
 * @param courses: any[]
 * @returns content: any[]
 */
export const getFilteredActiveQuestions: Function = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map(module => {
      const { questions } = module

      const questionsNext = questions.filter(question => {
        const { isActive: isActiveQuestion } = question
        return isActiveQuestion
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
