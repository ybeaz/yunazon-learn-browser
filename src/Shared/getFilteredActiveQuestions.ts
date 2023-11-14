/**
 * @description Function to filter NOT isActive questions
 * @param courses: any[]
 * @returns content: any[]
 */
export const getFilteredActiveQuestions = (courses: any[]): any[] => {
  return courses.map(course => {
    const { modules } = course

    const modulesNext = modules.map((module: any) => {
      const { questions } = module

      const questionsNext = questions.filter((question: any) => {
        const { isActive: isActiveQuestion } = question
        return isActiveQuestion
      })

      return { ...module, questions: questionsNext }
    })

    return { ...course, modules: modulesNext }
  })
}
