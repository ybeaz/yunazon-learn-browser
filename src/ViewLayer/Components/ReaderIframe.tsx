import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'

interface IReaderInput {
  contentID: string
  durationObj: any
}

export const ReaderIframe: React.FunctionComponent<any> = (
  props: IReaderInput
): JSX.Element => {
  const { contentID } = props

  return (
    <div className='ReaderIframe'>
      <div className='__wrapper'>
        <iframe className='_reader' src={`${contentID}`}></iframe>
      </div>
    </div>
  )
}
