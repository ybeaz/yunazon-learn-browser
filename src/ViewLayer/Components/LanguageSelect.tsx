import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { handleEvents } from '../Hooks/handleEvents'

const languageArr = [
  { code: 'ru', svgFile: 'ru.svg' },
  { code: 'en', svgFile: 'en.svg' },
]

export const LanguageSelect: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store: IRootStore) => store)

  const getLanguageIcons: Function = (
    languageArr: any[],
    language: string
  ): JSX.Element[] => {
    return languageArr.map(lang => {
      const { code, svgFile } = lang

      const classAdd = code === language ? '' : '_blur'
      const classAdd2 = code === language ? '_underlineActive' : ''

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
