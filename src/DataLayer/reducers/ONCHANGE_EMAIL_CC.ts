import { IRootStore } from '../../Interfaces/IRootStore'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_EMAIL_CC: ReducerType = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const nextForms = {
    ...forms,
    sendCc: data,
  }
  return { ...store, forms: nextForms }
}
