import { RootStoreType, FormsType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_FORMS_GROUP_PROP: ReducerType = (
  store: RootStoreType,
  data: {
    storeFormGroup?: keyof FormsType
    storeFormProp: string
    value: string
  }
): RootStoreType => {
  const { forms } = store

  const { storeFormGroup, storeFormProp, value } = data

  let formsNext = forms
  if (storeFormGroup) {
    const formsGroup: any = forms[storeFormGroup]
    formsNext = {
      ...forms,
      [storeFormGroup]: { ...formsGroup, [storeFormProp]: value },
    }
  } else {
    formsNext = { ...forms, [storeFormProp]: value }
  }

  return { ...store, forms: formsNext }
}
