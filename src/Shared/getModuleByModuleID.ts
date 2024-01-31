import { CourseType, ModuleType } from '../@types/GraphqlTypes'

type GetModuleByModuleIDParamsType = { modules: ModuleType[]; moduleID: string }

export type GetModuleByModuleIDOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type GetModuleByModuleIDResType = any

interface GetModuleByModuleIDType {
  (
    params: GetModuleByModuleIDParamsType,
    options?: GetModuleByModuleIDOptionsType
  ): GetModuleByModuleIDResType
}

const optionsDefault: Required<GetModuleByModuleIDOptionsType> = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to return module by provided moduleID
 * @import import { getModuleByModuleID } from '../Shared/getModuleByModuleID'
 */
export const getModuleByModuleID: GetModuleByModuleIDType = (
  { modules, moduleID },
  optionsIn
) => {
  const options: Required<GetModuleByModuleIDOptionsType> = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: GetModuleByModuleIDResType = []

  try {
    const module =
      modules.find((module2: ModuleType) => module2.moduleID === moduleID) ||
      modules[0]

    const { questions } = module
    const questionsTotal = questions.length
    output = {
      ...module,
      questionsTotal,
    }
  } catch (error: any) {
    console.log('getModuleByModuleID', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    if (printRes) {
      console.log('getModuleByModuleID [63]', { output })
    }

    return output
  }
}
