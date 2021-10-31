import { ISelectOption } from './../Select'

interface IGetExchangeSkillOptions {
  (
    categories: any,
    language: string,
    defaultOption: ISelectOption
  ): ISelectOption[]
}

export const getExchangeSkillOptions: IGetExchangeSkillOptions = (
  categories,
  language2,
  defaultOption2
) => {
  const exchangeSkillsMapped = Object.keys(categories).map(key => {
    return {
      text: categories[key][language2],
      value: key,
      selected: false,
    }
  })
  return [defaultOption2, ...exchangeSkillsMapped]
}
