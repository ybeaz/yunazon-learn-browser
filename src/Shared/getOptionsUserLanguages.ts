interface IGetOptionsUserLanguages {
  (userLanguages: string[], LANGUAGES: any, language: string): {
    label: string
    value: string
  }[]
}

/**
 * @description Function to return options for SelectAnt for languages
 */

export const getOptionsUserLanguages: IGetOptionsUserLanguages = (
  userLanguages,
  LANGUAGES,
  language
) => {
  const languagesMapped = Object.keys(LANGUAGES).reduce((red, lang) => {
    const key = LANGUAGES[lang]['639-1']
    return {
      ...red,
      [key]: { ...LANGUAGES[lang] },
    }
  }, {})

  return userLanguages.map(langItem => {
    const label = languagesMapped[langItem][language][0]
    return { label, value: langItem }
  })
}
