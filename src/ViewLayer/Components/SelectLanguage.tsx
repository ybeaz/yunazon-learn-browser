import React, { ReactElement } from 'react'
import { Select as SelectAntd } from 'antd'
// import 'antd/dist/antd.css'

import { LanguagesType } from 'yourails_common'
import { GetLanguagesOptionsJsx } from './GetLanguagesOptions'
import { SVG_FILE_DIR } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { handleEvents } from '../../DataLayer/index.handleEvents'

export type SelectLanguagePropsType = {
  LANGUAGES: LanguagesType
  language: null | string
  mode: 'multiple' | 'tags' | null
  typeEvent: string
  classAdded: string
  languagesSelected: { value: string }[]
}

export type SelectLanguagePropsOutType = {
  selectAntdProps: any
}

export const SelectLanguage: React.FunctionComponent<SelectLanguagePropsType> = (
  props: SelectLanguagePropsType
): ReactElement => {
  const { languagesSelected, classAdded, LANGUAGES, language: languageIn, mode, typeEvent } = props

  const language = languageIn || 'en'

  const stubOnAction = () => {}

  const filterOption = (input: string, option: any) => {
    return (
      option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0
    )
  }

  const lagnguagesMapped = GetLanguagesOptionsJsx(LANGUAGES, language, SVG_FILE_DIR, classAdded)

  const propsOut: SelectLanguagePropsOutType = {
    selectAntdProps: {
      defaultOpen: false,
      labelInValue: true,
      value: languagesSelected,
      defaultValue: [],
      filterOption,
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      className: '__selectAntd',
      mode,
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
