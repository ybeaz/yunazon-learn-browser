import { ICountry } from '../Constants/countries.const'
import { IDictionary } from '../Constants/dictionary.const'
import { SelectOptionAntDType } from '../Interfaces/SelectOptionAntDType'

interface IGetCountriesOptions {
  (
    countries: ICountry[],
    language: string,
    defaultOption: IDictionary
  ): SelectOptionAntDType[]
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
    return { label: text, value: alpha3 }
  })

  const defaultOptionNext = {
    label: defaultOption2[language2],
    value: defaultOption2['en'],
  }

  return [defaultOptionNext, ...countriesMapped]
}
