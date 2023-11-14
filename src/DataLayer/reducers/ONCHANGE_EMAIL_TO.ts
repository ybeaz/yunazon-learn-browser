import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_EMAIL_TO: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const nextForms = {
    ...forms,
    sendTo: data,
  }
  return { ...store, forms: nextForms }
}
