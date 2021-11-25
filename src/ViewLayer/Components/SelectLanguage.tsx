import React, { ReactElement } from 'react'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { ILanguages } from '../../Interfaces/ILanguages'
import { getLanguagesOptionsJsx } from '../../Shared/getLanguagesOptions'
import { SVG_FILE_DIR } from '../../Constants/languages.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface SelectLanguageArgs {
  LANGUAGES: ILanguages
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

  return (
    <div className={`SelectLanguage ${classAdded}`}>
      <SelectAntd
        // defaultOpen
        labelInValue
        value={languagesSelected}
        filterOption={filterOption}
        placeholder={DICTIONARY['select'][language]}
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
