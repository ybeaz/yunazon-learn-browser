interface IGetOptionsForSelectAntd {
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
 * @description Function to return array of objects that fits option model of SelectAntd
 */

export const getOptionsUserSkillsExpertise = (
  userSkillsExpertise,
  CATEGORIES_TO_EXCHANGE,
  language
) =>
  userSkillsExpertise.map(skill => {
    const label = CATEGORIES_TO_EXCHANGE[skill][language]

    return { label, value: skill }
  })
