interface IGetOptionsUserLanguages {
  (
    userLanguages: string[],
    LANGUAGES: any,
    language: string
  ): {
    label: string
    value: string
  }[]
}

/**
 * @description Function to return languages options for SelectAnt
 */

export const getOptionsUserLanguages: IGetOptionsUserLanguages = (
  userLanguages,
  LANGUAGES,
  language
) => {
  const languagesMapped = Object.keys(LANGUAGES).reduce(
    (accum: any, language2: string) => {
      const key = LANGUAGES[language2]['639-1']
      return {
        ...accum,
        [key]: { ...LANGUAGES[language2] },
      }
    },
    {}
  )

  return userLanguages.map((language2: string) => {
    const label = languagesMapped[language2][language][0]
    return { label, value: language2 }
  })
}
