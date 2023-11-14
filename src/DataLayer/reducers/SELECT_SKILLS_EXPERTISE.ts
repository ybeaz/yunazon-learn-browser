import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'

export const SELECT_SKILLS_EXPERTISE: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userSkillsExpertise: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
