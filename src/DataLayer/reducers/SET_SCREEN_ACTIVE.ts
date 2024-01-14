import { componentsStateDefault } from '../rootStoreDefault'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrDeep } from '../../Shared/getUniqArrDeep'
import { getUpdatedArrByArrInput } from '../../Shared/getUpdatedArrByArrInput'
import { RootStoreType } from '../../Interfaces/RootStoreType'

export const SET_SCREEN_ACTIVE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { screenActive } = data

  console.info('SET_SCREEN_ACTIVE [13]', { screenActive })

  const { componentsState } = store

  const componentsStateNext = {
    ...componentsState,
    screenActive,
  }
  return { ...store, componentsState: componentsStateNext }
}
