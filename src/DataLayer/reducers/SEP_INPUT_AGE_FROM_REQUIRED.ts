import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_INPUT_AGE_FROM_REQUIRED: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { catalogSep } = forms
  const catalogSepNext = { ...catalogSep, inputAgeFromRequired: data }
  const formsNext = { ...forms, catalogSep: catalogSepNext }
  return { ...store, forms: formsNext }
}
