import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'

export const LanguageSelect: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  return (
    <div className='LanguageSelect'>
      <div className='__option'>
        <img
          className='_svgImage'
          src={
            require('../../../node_modules/language-icons/icons/ru.svg').default
          }
          onClick={event => handleEvents(event, { eventType: '', data: 'ru' })}
        />
      </div>
      <div className='__option'>
        <img
          className='_svgImage'
          src={
            require('../../../node_modules/language-icons/icons/en.svg').default
          }
          onClick={event => handleEvents(event, { eventType: '', data: 'en' })}
        />
      </div>
    </div>
  )
}
