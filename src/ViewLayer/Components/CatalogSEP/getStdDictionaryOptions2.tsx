import { IDictionary } from '../../../Constants/dictionary.const'
import { ISelectOption } from './../Select'

interface IGetStdDictionaryOptions {
  (
    dictionary: IDictionary,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

/**
 * @description Funciton to get array of JSX option elements - dictionary options
 */
export const getStdDictionaryOptions2: IGetStdDictionaryOptions = (
  dictionary2,
  language2,
  defaultOption2
) => {
  const dictionaryMapped = Object.keys(dictionary2).map((elem2: string) => {
    return {
      text: dictionary2[elem2][language2],
      value: elem2,
      selected: false,
    }
  })
  return [defaultOption2, ...dictionaryMapped]
}
