import React, { useRef, useEffect } from 'react'

import { handleEvents } from '../../../DataLayer/index.handleEvents'

import {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
} from './ReaderIframeTypes'

/**
 * @description Component to render ReaderIframe
 * @import import { ReaderIframe, ReaderIframePropsType, ReaderIframePropsOutType, ReaderIframeType } 
             from '../Components/ReaderIframe/ReaderIframe'
 */
const ReaderIframeComponent: ReaderIframeComponentType = (props: ReaderIframePropsType) => {
  const { moduleID, contentID, isVisible, isIframe, screenType, children } = props
  const iFrameRef = useRef(null)

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'

  const classAdded = screenType === 'AcademyPresent' ? 'ReaderIframe_AcademyPresent' : ''

  return (
    <div className={`ReaderIframe ${classAdded}`}>
      {children[0]}
      <div className={`_wrapper ${isVisibleClass}`}>
        {isIframe && (
          <iframe
            ref={iFrameRef}
            className='_reader'
            src={`${contentID}`}
            width='640'
            height='340'
            frameBorder='0'
            onLoad={event => {
              handleEvents(event, {
                typeEvent: 'TOGGLE_MEDIA_LOADED',
                data: { mediaKey: moduleID, isMediaLoaded: true },
              })
            }}
          ></iframe>
        )}
        {children[1]}
      </div>
      <div className='_panel'>{children[2]}</div>
    </div>
  )
}

export const ReaderIframe: ReaderIframeType = React.memo(ReaderIframeComponent)

export type {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
}
