import React, { useState, useEffect } from 'react'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { ILanguages } from '../../Interfaces/ILanguages'
import { getLanguagesOptionsJsx } from '../../Shared/getLanguagesOptions'
import { SVG_FILE_DIR } from '../../Constants/languages.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { handleEvents } from '../../DataLayer/index.handleEvents'

const languageArr = [
  { code: 'ru', svgFile: 'ru.svg' },
  { code: 'en', svgFile: 'en.svg' },
]

interface SelectLanguageArgs {
  languages: ILanguages
  defaultLanguage: null | string
  mode: 'multiple' | 'tags'
  typeEvent: string
  classAdded: string
}

export const SelectLanguage: React.FunctionComponent<SelectLanguageArgs> = (
  props: SelectLanguageArgs
): JSX.Element => {
  const { classAdded, languages, defaultLanguage, mode, typeEvent } = props

  const stubOnAction = () => {}

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const lagnguagesMapped = getLanguagesOptionsJsx(
    languages,
    defaultLanguage,
    SVG_FILE_DIR,
    classAdded
  )

  return (
    <div className={`SelectLanguage ${classAdded}`}>
      <SelectAntd
        labelInValue
        // @ts-ignore
        defaultValue={{
          value: defaultLanguage,
        }}
        filterOption={filterOption}
        placeholder={DICTIONARY['select'][defaultLanguage]}
        showSearch={true}
        className='__selectAntd'
        mode={mode}
        onBlur={stubOnAction}
        onChange={(values: any) =>
          handleEvents({}, { typeEvent, data: values })
        }
        onFocus={stubOnAction}
        onSearch={stubOnAction}
      >
        {lagnguagesMapped}
      </SelectAntd>
    </div>
  )
}
