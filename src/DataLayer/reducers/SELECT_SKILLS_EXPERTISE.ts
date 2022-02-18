import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_SKILLS_EXPERTISE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const profileNext = { ...user, userSkillsExpertise: data }
  const formsNext = { ...forms, user: profileNext }
  return { ...store, forms: formsNext }
}
