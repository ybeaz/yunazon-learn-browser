import { ISelectOption } from './../Select'
import { ICountry } from '../../../Constants/countries.const'

interface IGetCountriesOptions {
  (
    countries: ICountry[],
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

/**
 * @description Funciton to get array of JSX option elements -country options
 */
export const getCountriesOptions: IGetCountriesOptions = (
  countries,
  language2,
  defaultOption2
) => {
  const countriesMapped = countries.map(item => {
    const { name, alpha3, dictionary } = item
    const text = dictionary ? dictionary[language2] : name
    return {
      selected: false,
      text,
      value: alpha3,
    }
  })
  return [defaultOption2, ...countriesMapped]
}
