import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'

export const Reader: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  useEffect(() => {
    handleEvents(
      {},
      {
        typeEvent: 'TOGGLE_MEDIA_LOADED',
        data: { mediaKey: 'wBvQba1DI1Y', isMediaLoaded: true },
      }
    )
  }, [])

  return <div className='Reader'>I am reader</div>
}
