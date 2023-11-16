import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_MODULE_ID_ACTIVE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { moduleID } = data

  const { scorm } = store

  const scormNext = { ...scorm, moduleIDActive: moduleID }

  return { ...store, scorm: scormNext }
}
