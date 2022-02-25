interface IGetOptionsUserSkillsExpertise {
  (
    userSkillsExpertise: string[],
    CATEGORIES_TO_EXCHANGE: Record<string, { en: string; ru: string }>,
    language: string
  ): {
    label: string
    value: string
  }[]
}

/**
 * @description Function to return skills options for ses SelectAntd
 */

export const getOptionsAntdStandard: IGetOptionsUserSkillsExpertise = (
  userSkillsExpertise,
  CATEGORIES_TO_EXCHANGE,
  language
) =>
  userSkillsExpertise.map(skill => {
    const label = CATEGORIES_TO_EXCHANGE[skill][language]

    return { label, value: skill }
  })
