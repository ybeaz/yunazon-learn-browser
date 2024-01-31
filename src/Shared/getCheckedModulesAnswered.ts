import { ModuleType, QuestionType, OptionType } from '../@types/'

/**
 * @description Function to get answer by optionID
 * @import import { getCheckedModulesAnswered } from 'src/Shared/getCheckedModulesAnswered'
 */

export const getCheckedModulesAnswered = (modules: ModuleType[]): boolean => {
  let isAnswered = true

  for (let module of modules) {
    if (!isAnswered) break

    const { questions } = module

    for (let question of questions) {
      const options: (OptionType & { answer?: boolean })[] = question.options

      isAnswered = options.some(option => option.answer === true)

      if (!isAnswered) break
    }
  }

  return isAnswered
}
