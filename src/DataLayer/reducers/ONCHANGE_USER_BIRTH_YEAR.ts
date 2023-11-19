import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const ONCHANGE_USER_BIRTH_YEAR: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms
  const userBirthYear = data ? parseInt(data, 10) : data
  const userNext = { ...user, userBirthYear }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
