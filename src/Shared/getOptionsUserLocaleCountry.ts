import { ICountry } from '../Constants/countries.const'

interface IGetOptionsUserLocaleCountry {
  (userLocaleCountry: string, COUNTRIES: ICountry[], language: string): {
    label: string
    value: string
  }[]
}

/**
 * @description Function to return countries options for SelectAnt
 */

export const getOptionsUserLocaleCountry: IGetOptionsUserLocaleCountry = (
  userLocaleCountry,
  COUNTRIES,
  language
) =>
  userLocaleCountry
    ? [
        {
          label: COUNTRIES.find(
            (country: ICountry) => country.alpha3 === userLocaleCountry
          ).dictionary[language],
          value: userLocaleCountry,
        },
      ]
    : []
