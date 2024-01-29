import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { SET_MODULE_ID_ACTIVE } from './SET_MODULE_ID_ACTIVE'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getModulesWithSetActive } from '../../Shared/getModulesWithSetActive'

export const SELECT_MODULE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { moduleID } = data
  const { modules } = store

  let storeNext: RootStoreType = { ...store }
  storeNext = SET_MODULE_ID_ACTIVE(storeNext, { moduleID })

  let modulesNext = getProvidedSelectedDefault(modules)
  modulesNext = getModulesWithSetActive(modules, moduleID)
  storeNext = { ...storeNext, modules: modulesNext }

  return storeNext
}
