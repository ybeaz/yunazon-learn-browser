import React from 'react'
import { useSelector } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { handleEvents } from '../../DataLayer/index.handleEvents'

const languageArr = [
  { code: 'ru', svgFile: 'ru.svg' },
  { code: 'en', svgFile: 'en.svg' },
]

export const LanguageSelect: React.FunctionComponent = () => {
  const { language } = useSelector((store2: IRootStore) => store2)

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
            src={`https://yourails.com/images/${svgFile}`}
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
      {getLanguageIcons(languageArr, language)}
    </div>
  )
}
