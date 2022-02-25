interface IGetOptionsUserCountries {
  (userLocaleCountry: string[], COUNTRIES: any, language: string): {
    label: string
    value: string
  }[]
}

/**
 * @description Function to return countries options for SelectAnt
 */

export const getOptionsUserCountries = (
  userLocaleCountry,
  COUNTRIES,
  language
) => {
  return
}
