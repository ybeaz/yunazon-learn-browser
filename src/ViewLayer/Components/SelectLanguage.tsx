import React, { ReactElement } from 'react'
import { Select as SelectAntd } from 'antd'
// import 'antd/dist/antd.css'

import { LanguagesType } from '../../Interfaces/LanguagesType'
import { getLanguagesOptionsJsx } from '../../Shared/getLanguagesOptions'
import { SVG_FILE_DIR } from '../../Constants/languages.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface SelectLanguageArgs {
  LANGUAGES: LanguagesType
  language: null | string
  mode: 'multiple' | 'tags'
  typeEvent: string
  classAdded: string
  languagesSelected: { value: string }[]
}

export const SelectLanguage: React.FunctionComponent<SelectLanguageArgs> = (
  props: SelectLanguageArgs
): ReactElement => {
  const {
    languagesSelected,
    classAdded,
    LANGUAGES,
    language,
    mode,
    typeEvent,
  } = props

  const stubOnAction = () => {}

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const lagnguagesMapped = getLanguagesOptionsJsx(
    LANGUAGES,
    language,
    SVG_FILE_DIR,
    classAdded
  )

  const propsOut = {
    selectAntdProps: {
      defaultOpen: false,
      labelInValue: true,
      value: languagesSelected,
      defaultValue: [],
      filterOption: filterOption,
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      className: '__selectAntd',
      mode: mode,
      onBlur: stubOnAction,
      onChange: (values: any) => handleEvents({}, { typeEvent, data: values }),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
    },
  }

  return (
    <div className={`SelectLanguage ${classAdded}`}>
      <SelectAntd {...propsOut.selectAntdProps}>{lagnguagesMapped}</SelectAntd>
    </div>
  )
}
