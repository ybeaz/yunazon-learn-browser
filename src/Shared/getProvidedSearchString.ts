/**
 * @description Function to create searchString
 * @param courses: any[]
 * @returns content: any[]
 */
export const getProvidedSearchString = (courses: any[]): any[] => {
  return courses.map(course => {
    let searchArr: any[] = []
    const { capture = '', description = '', modules } = course
    searchArr = [...searchArr, capture, description]

    const modulesNext = modules.map((module: any) => {
      const { capture = '', description = '', questions } = module
      searchArr = [...searchArr, capture, description]

      const questionsNext = questions.map((question: any) => {
        const { capture, options } = question
        searchArr = [...searchArr, capture]

        const optionNext = options.map((option: any) => {
          const { label } = option
          searchArr = [...searchArr, label]
          return { ...option }
        })

        return { ...question, options: optionNext }
      })

      return { ...module, questions: questionsNext }
    })

    const searchString = searchArr.join(' ').toLocaleLowerCase()
    return { ...course, searchString, modules: modulesNext }
  })
}
