import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_EDIT_NAME_VISIBILITY_STATE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const isEditNameVisibleIn = data?.isEditNameVisible

  const { componentsState } = store
  const { isEditNameVisible: isEditNameVisibleStore } = componentsState

  let isEditNameVisible = !isEditNameVisibleStore

  if (isEditNameVisibleIn !== undefined) isEditNameVisible = isEditNameVisibleIn

  const componentsStateNext = {
    ...componentsState,
    isEditNameVisible,
  }
  return { ...store, componentsState: componentsStateNext }
}
