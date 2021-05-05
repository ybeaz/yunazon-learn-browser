import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'

interface IReaderInput {
  contentID: string
  isVisible: boolean
  children: React.ReactChildren
}

export const ReaderIframe: React.FunctionComponent<any> = (
  props: IReaderInput
): JSX.Element => {
  const { contentID, isVisible } = props

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  return (
    <div className='ReaderIframe'>
      <div className={`__wrapper ${isVisibleClass}`}>
        <iframe
          className='_reader'
          src={`${contentID}`}
          onLoad={event =>
            handleEvents(event, {
              typeEvent: 'TOGGLE_MEDIA_LOADED',
              data: { mediaKey: contentID, isMediaLoaded: true },
            })
          }
        ></iframe>
        {props.children[0]}
      </div>
      <div className='__panel'>{props.children[1]}</div>
    </div>
  )
}
