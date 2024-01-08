import {
  RootStoreType,
  CreateModuleStageType,
  CreateCourseStatusEnumType,
  CreateModuleStagesEnumType,
  ReducerType,
} from '../../Interfaces/'

type DataType = {
  stage: CreateModuleStagesEnumType
  status: CreateCourseStatusEnumType
  timeCalculated: CreateModuleStageType['timeCalculated']
}

export const SET_COURSE_CREATE_STATUS: ReducerType = (
  store: RootStoreType,
  data: DataType
): RootStoreType => {
  const { stage, status, timeCalculated } = data

  const { componentsState } = store
  const { createModuleStages } = componentsState

  let createModuleStateNext: CreateModuleStageType = createModuleStages[stage]
  if (status && timeCalculated)
    createModuleStateNext = { status, timeCalculated }
  else if (status)
    createModuleStateNext = { ...createModuleStages[stage], status }
  else if (timeCalculated)
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
