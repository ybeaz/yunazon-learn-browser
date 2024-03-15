import { ModuleType, QuestionType, OptionType } from '../../@types/GraphqlTypes'

import { getValidatedEntity } from './getValidatedEntity'
import { templateModule } from './templateModule'
import { templateQuestion } from './templateQuestion'
import { templateOption } from './templateOption'

/**
 * @description Function to validate a module by known criteria
 * @param courses: any[]
 * @returns content: any[]
 */
export const getValidatedModules = (modules: ModuleType[]): ModuleType[] => {
  let moduleValidation: any[] = []

  modules.forEach((module: ModuleType, indexModule) => {
    const { moduleID, questions } = module

    moduleValidation = getValidatedEntity({
      entityValidation: moduleValidation,
      parentID: null,
      entityIndex: indexModule,
      entityType: 'module',
      entityID: 'moduleID',
      templateCheck: templateModule,
      entity: module,
    })

    questions.forEach((question: QuestionType, indexQuestion: number) => {
      const { questionID, options } = question

      moduleValidation = getValidatedEntity({
        entityValidation: moduleValidation,
        parentID: moduleID,
        entityIndex: indexQuestion,
        entityType: 'question',
        entityID: 'questionID',
        templateCheck: templateQuestion,
        entity: question,
      })

      options.forEach((options: OptionType, indexOption: number) => {
        moduleValidation = getValidatedEntity({
          entityValidation: moduleValidation,
          parentID: questionID,
          entityIndex: indexOption,
          entityType: 'option',
          entityID: 'optionID',
          templateCheck: templateOption,
          entity: options,
        })
      })
    })
  })

  if (moduleValidation.length) {
    console.error('getModuleValidated [225]', moduleValidation)
  }
  return modules
}
