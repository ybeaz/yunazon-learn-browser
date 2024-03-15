import { ModuleType, QuestionType } from '../@types/GraphqlTypes'

/**
 * @description Function to filter NOT isActive modules and questions
 */
export const getFilteredActiveModulesQuestions = (
  modules: ModuleType[]
): ModuleType[] => {
  return modules.reduce((accum: ModuleType[], module: ModuleType) => {
    const { isActive: isActiveModule, questions } = module
    let res = accum

    if (isActiveModule) {
      const questionsNext = questions.filter(
        (question: QuestionType) => question.isActive
      )
      const moduleNext = { ...module, questions: questionsNext }
      res = [...accum, moduleNext]
    }

    return res
  }, [])
}
