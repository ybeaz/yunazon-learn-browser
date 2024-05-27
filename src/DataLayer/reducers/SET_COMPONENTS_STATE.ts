import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { CourseType, ModuleType } from '../../@types/GraphqlTypes.d'

export const SET_COMPONENTS_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { componentsStateProp, value } = data
  const { componentsState } = store
  const componentsStateNext: any = {
    ...componentsState,
    [componentsStateProp]: value,
  }
  const storeNext = { ...store, componentsState: componentsStateNext }
  return storeNext
}
