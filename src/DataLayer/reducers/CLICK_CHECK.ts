import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getOptionsClickedByID } from 'yourails_common'

export const CLICK_CHECK: ReducerType = (store: RootStoreType, data: any): RootStoreType => {
  const { optionID, multi } = data
  const { modules } = store
  const modulesNext = getOptionsClickedByID(modules, optionID, multi)
  const storeNext = { ...store, modules: modulesNext }
  return storeNext
}
