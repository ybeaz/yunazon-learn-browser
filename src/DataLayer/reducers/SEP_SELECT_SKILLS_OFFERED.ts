import { IRootStore } from '../../Interfaces/IRootStore'

export const SEP_SELECT_SKILLS_OFFERED: Function = (
  store: IRootStore,
  data: any
): IRootStore => {
  const { forms } = store
  const { catalogSep } = forms
  const catalogSepNext = { ...catalogSep, selectSkillsOffered: data }
  const formsNext = { ...forms, catalogSep: catalogSepNext }
  return { ...store, forms: formsNext }
}
