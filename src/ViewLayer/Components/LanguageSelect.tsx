import React from 'react'
import { useSelector } from 'react-redux'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { ILanguages } from '../../Interfaces/ILanguages'
import { getLanguagesOptionsJsx } from '../../Shared/getLanguagesOptions'
import { SVG_FILE_DIR } from '../../Constants/languages.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { handleEvents } from '../../DataLayer/index.handleEvents'

const languageArr = [
  { code: 'ru', svgFile: 'ru.svg' },
  { code: 'en', svgFile: 'en.svg' },
]

interface LanguageSelectArgs {
  languages: ILanguages
  defaultLanguage?: null | string
  mode?: null | 'multiple' | 'tags'
}

export const LanguageSelect: React.FunctionComponent<LanguageSelectArgs> = (
  props: LanguageSelectArgs
): JSX.Element => {
  const { languages, defaultLanguage, mode } = props

  const { language } = useSelector((store2: IRootStore) => store2)

  const stubOnAction = () => console.info('LanguageSelect [26]')

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const lagnguagesMapped = getLanguagesOptionsJsx(
    languages,
    language,
    SVG_FILE_DIR
  )

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
              handleEvents(event, {
                typeEvent: 'APP_SELECT_LANGUAGE',
                data: code,
              })
            }
          />
          <span className={`_underline ${classAdd2}`}></span>
        </div>
      )
    })
  }

  return (
    <div className='LanguageSelect'>
      <SelectAntd
        labelInValue
        // @ts-ignore
        defaultValue={{ value: defaultLanguage }}
        filterOption={filterOption}
        placeholder={DICTIONARY['select'][language]}
        showSearch={true}
        className='__selectAntd'
        mode={mode}
        onBlur={stubOnAction}
        onChange={(values: any) =>
          handleEvents(
            {},
            { typeEvent: 'APP_SELECT_LANGUAGE', data: values.value }
          )
        }
        onFocus={stubOnAction}
        onSearch={stubOnAction}
      >
        {lagnguagesMapped}
      </SelectAntd>
    </div>
  )
}
