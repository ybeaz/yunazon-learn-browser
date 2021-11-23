import { Select as SelectAntd } from 'antd'

import { IDictionary } from '../../../Constants/dictionary.const'
import { ISelectOptionAntD } from '../../../Interfaces/ISelectOptionAntD'
import { ISelectOption } from '../../../Interfaces/ISelectOption'

const { Option: OptionAntd } = SelectAntd

interface IGetStdDictionaryOptions {
  (
    categories: any,
    language2: string,
    defaultOption2: IDictionary
  ): ISelectOptionAntD[]
}

/**
 * @description Funciton to get array of objects from standard distionary of objects
 */
export const getStdDictionaryOptions: IGetStdDictionaryOptions = (
  categories,
  language2,
  defaultOption2
) => {
  const stdDictionaryOptionsMapped = Object.keys(categories).map(key => {
    return { label: categories[key][language2], value: key }
  })

  const defaultStdOptionNext = {
    label: defaultOption2[language2],
    value: defaultOption2['en'],
  }

  return [defaultStdOptionNext, ...stdDictionaryOptionsMapped]
}

/**
 * @description Function to return array of JSX Elements - options
 */

type IOptionFCAntd = typeof SelectAntd.Option

interface IGetStdDictionaryOptionsJsxElements {
  (
    categories: any,
    language: string,
    defaultOption: ISelectOption
  ): IOptionFCAntd[]
}

export const getStdDictionaryOptionsJsxElements: IGetStdDictionaryOptionsJsxElements =
  (categories, language2, defaultOption2): IOptionFCAntd[] => {
    const exchangeSkillsMapped = Object.keys(categories).map(key => {
      return (
        <OptionAntd key={key} value={key} isSelectOption={false}>
          {categories[key][language2]}
        </OptionAntd>
      )
    })

    const { text, value, selected } = defaultOption2
    const defaultOptionNext = (
      <OptionAntd key={value} value={value} isSelectOption={selected}>
        {text}
      </OptionAntd>
    )

    // @ts-ignore
    return [defaultOptionNext, ...exchangeSkillsMapped]
  }
