import { RootStoreType, ReducerType } from '../../Interfaces/'

import {
  CreateModuleStageType,
  CreateModuleStatusEnumType,
  CreateModuleStagesEnumType,
} from 'yourails_common'

type DataType = {
  stage: CreateModuleStagesEnumType
  isActive: CreateModuleStageType['isActive']
  status: CreateModuleStatusEnumType
  timeCalculated: CreateModuleStageType['timeCalculated']
}

export const SET_MODULE_CREATE_STATUS: ReducerType = (
  store: RootStoreType,
  data: DataType
): RootStoreType => {
  const { stage, isActive, status, timeCalculated } = data
  const dataKeys = Object.keys(data)

  const { componentsState } = store
  const { createModuleStages } = componentsState

  let createModuleStateNext: CreateModuleStageType = createModuleStages[stage]
  if (dataKeys.includes('isActive'))
    createModuleStateNext = { ...createModuleStages[stage], isActive }
  if (dataKeys.includes('status')) createModuleStateNext = { ...createModuleStages[stage], status }
  if (dataKeys.includes('timeCalculated'))
    createModuleStateNext = { ...createModuleStages[stage], timeCalculated }

  const createModuleStagesNext = {
    ...createModuleStages,
    [stage]: createModuleStateNext,
  }

  const componentsStateNext = {
    ...componentsState,
    createModuleStages: createModuleStagesNext,
  }

  return { ...store, componentsState: componentsStateNext }
}
