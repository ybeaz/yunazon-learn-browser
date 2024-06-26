import { ModuleType, AcademyPresentCaseEnumType } from '../@types/'

import { getFilteredActiveModulesQuestions } from './getFilteredActiveModulesQuestions'
import { getValidatedModules } from './getValidatedEntity/getValidatedModules'
import { getOptionsShuffled } from './getOptionsShuffled'
import { getProvidedAnswerDefault } from './getProvidedAnswerDefault'
import { getChainedResponsibility } from './getChainedResponsibility'
import { getQuestionsPickedRandomly } from '../Shared/getQuestionsPickedRandomly'

export type GetPreparedModulesParamsType = ModuleType[]

export type GetPreparedModulesResType = ModuleType[]

interface GetPreparedModulesType {
  (params: GetPreparedModulesParamsType, options?: { printRes: boolean }): GetPreparedModulesResType
}

/**
 * @description Function to getPreparedModules
 * @run ts-node src/shared/utils/getPreparedModules.ts
 * @import import { getPreparedModules } from '../../Shared/getPreparedModules'
 */

export const getPreparedModules: GetPreparedModulesType = (modules: ModuleType[], options) => {
  let modulesNext: ModuleType[] = []

  try {
    /* Case: use the whole modules set from API call */

    modulesNext =
      // .exec(getProvidedSearchString)
      getChainedResponsibility(modules)
        .exec(getValidatedModules)
        .exec(getFilteredActiveModulesQuestions)
        .exec(getQuestionsPickedRandomly)
        .exec(getProvidedAnswerDefault)
        .exec(getOptionsShuffled).result

    if (options?.printRes) {
      console.log('getPreparedModules', { modulesNext })
    }
  } catch (error: any) {
    console.log('getPreparedModules', 'Error', {
      'error.message': error.message,
      modules,
    })
  } finally {
    return modulesNext
  }
}

if (require.main === module) {
  // This code will only run if the file is executed directly
  console.log('This file is being run directly.')
}
