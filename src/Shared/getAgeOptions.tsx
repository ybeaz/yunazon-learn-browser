import { IAge } from '../../../Constants/age.const'
import { SelectOptionType } from './../Select'

interface IGetAgeOptions {
  (age: IAge, defaultOption: SelectOptionType): SelectOptionType[]
}

/**
 * @description Funciton to get array of JSX option elements - age options
 */
export const getAgeOptions: IGetAgeOptions = (age2, defaultOption2) => {
  const ageMapped = age2.map((number2: number) => {
    return {
      text: String(number2),
      value: String(number2),
      selected: false,
    }
  })
  return [defaultOption2, ...ageMapped]
}
