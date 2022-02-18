import { IRootStore } from '../../Interfaces/IRootStore'

export const SELECT_SKILLS_EXPERTISE: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { user } = forms
  const userNext = { ...user, userSkillsExpertise: data }
  const formsNext = { ...forms, user: userNext }
  return { ...store, forms: formsNext }
}
