import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { getLanguagesOptions } from '../../Shared/getLanguagesOptions'
import { LANGUAGES, SVG_FILE_DIR } from '../../Constants/languages.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { handleEvents } from '../../DataLayer/index.handleEvents'

const languageArr = [
  { code: 'ru', svgFile: 'ru.svg' },
  { code: 'en', svgFile: 'en.svg' },
]

export const LanguageSelect: React.FunctionComponent = () => {
  const { language } = useSelector((store2: IRootStore) => store2)

  const defaultOption = DICTIONARY.notSelected

  const stubOnAction = () => {}

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const selectLanguageRequiredProps = {
    allowClear: true,
    componentId: nanoid(),
    defaultValue: [],
    filterOption,
    mode: null,
    onBlur: stubOnAction,
    onChange: (values: string[]) =>
      handleEvents(
        {},
        { typeEvent: 'SEP_SELECT_LANGUAGE_REQUIRED', data: values }
      ),
    onFocus: stubOnAction,
    onSearch: stubOnAction,
    optionFilterProp: 'children',
    options: getLanguagesOptions(LANGUAGES, language, defaultOption),
    placeholder: DICTIONARY['select'][language],
    showSearch: true,
    style: { width: '100%' },
  }

  const getLanguageIcons: Function = (
    languageArr2: any[],
    language2: string
  ): JSX.Element[] => {
    return languageArr2.map(lang => {
      const { code, svgFile } = lang

      const classAdd = code === language2 ? '' : '_blur'
      const classAdd2 = code === language2 ? '_underlineActive' : ''

      return (
        <div className='__option'>
          <img
            className={`_svgImage ${classAdd}`}
            src={`${SVG_FILE_DIR}${svgFile}`}
            onClick={event =>
              handleEvents(event, { typeEvent: 'SELECT_LANGUAGE', data: code })
            }
          />
          <span className={`_underline ${classAdd2}`}></span>
        </div>
      )
    })
  }

  return (
    <div className='LanguageSelect'>
      <SelectAntd {...selectLanguageRequiredProps} />
      {getLanguageIcons(languageArr, language)}
    </div>
  )
}
