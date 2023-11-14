import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_EMAIL_CC: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const nextForms = {
    ...forms,
    sendCc: data,
  }
  return { ...store, forms: nextForms }
}
