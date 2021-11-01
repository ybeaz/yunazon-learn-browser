import { Select as SelectAntd } from 'antd'

import { ISelectOption } from '../../../Interfaces/ISelectOption'

import 'antd/dist/antd.css'
const { Option: OptionAntd } = SelectAntd

type IOptionFCAntd = typeof SelectAntd.Option

interface IGetExchangeSkillOptions {
  (
    categories: any,
    language: string,
    defaultOption: ISelectOption
  ): IOptionFCAntd[]
}

export const getExchangeSkillOptions: IGetExchangeSkillOptions = (
  categories,
  language2,
  defaultOption2
): IOptionFCAntd[] => {
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
