import { RootStoreType, ReducerType } from '../../Interfaces/'

export const SET_COURSE_CREATE_STATUS: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { stage, status } = data

  const { componentsState } = store
  const { createModuleStages } = componentsState

  const createModuleStagesNext = { ...createModuleStages, [stage]: status }
  const componentsStateNext = {
    ...componentsState,
    createModuleStages: createModuleStagesNext,
  }

  return { ...store, componentsState: componentsStateNext }
}
