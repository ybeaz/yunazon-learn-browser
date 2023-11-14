import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_USER_LANGUAGES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userLanguages: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
