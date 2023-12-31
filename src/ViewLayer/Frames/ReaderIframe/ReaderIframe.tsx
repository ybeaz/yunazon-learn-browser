import React, { useRef, useEffect } from 'react'

import { handleEvents } from '../../../DataLayer/index.handleEvents'

import {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
} from './ReaderIframeTypes'

function checkIframeLoaded(iFrameRef: any, contentID: string) {
  // console.log(" function checked")
  // Get a handle to the iframe element

  console.log('ReaderIframe [16]', {
    contentID,
    'iframeDoc.readyState': iframeDoc?.readyState,
    iFrameRef,
  })
  // check if the iframe is loaded or not (= undefined = null)
  if (iFrameRef == null) {
    // If we are here, it is not loaded. Set things up so we check the status again in 1000 milliseconds
    window.setTimeout(() => checkIframeLoaded(iFrameRef, contentID), 1000)
  } else {
    var iframeDoc = iFrameRef?.contentDocument || iFrameRef?.contentWindow
    // Check if loading is completed
    if (iframeDoc.readyState == 'complete') {
      console.info('ReaderIframe [26]', {
        'iframeDoc.readyState': iframeDoc.readyState,
      })
      handleEvents(event, {
        typeEvent: 'TOGGLE_MEDIA_LOADED',
        data: { mediaKey: contentID, isMediaLoaded: true },
      })
    } else {
      // even if the iframe is loaded the "readystate may not be completed yet" so we need to recall the function.
      window.setTimeout(() => checkIframeLoaded(iFrameRef, contentID), 1000)
    }
  }
}

/**
 * @description Component to render ReaderIframe
 * @import import { ReaderIframe, ReaderIframePropsType, ReaderIframePropsOutType, ReaderIframeType } 
             from '../Components/ReaderIframe/ReaderIframe'
 */
const ReaderIframeComponent: ReaderIframeComponentType = (
  props: ReaderIframePropsType
) => {
  const { contentID, isVisible, screenType } = props
  const iFrameRef = useRef(null)

  // useEffect(() => {
  //   if (contentID) checkIframeLoaded(iFrameRef.current, contentID)
  // }, [])

  let isVisibleClass = isVisible ? '_blockVisible' : '_blockHided'
  console.info('ReaderIframe [53]', { isVisibleClass, isVisible })

  const classAdded =
    screenType === 'AcademyPresent' ? 'ReaderIframe_AcademyPresent' : ''

  return (
    <div className={`ReaderIframe ${classAdded}`}>
      <div className={`__wrapper ${isVisibleClass}`}>
        <iframe
          ref={iFrameRef}
          className='_reader'
          src={`${contentID}`}
          width='640'
          height='340'
          frameBorder='0'
          onLoad={event => {
            console.info('ReaderIframe [76]', { event })
            handleEvents(event, {
              typeEvent: 'TOGGLE_MEDIA_LOADED',
              data: { mediaKey: contentID, isMediaLoaded: true },
            })
          }}
        ></iframe>
        {props.children[0]}
      </div>
      <div className='__panel'>{props.children[1]}</div>
    </div>
  )

  const {} = props

  const propsOut: ReaderIframePropsOutType = {}

  return <div className='ReaderIframe'>ReaderIframe</div>
}

export const ReaderIframe: ReaderIframeType = React.memo(ReaderIframeComponent)

export type {
  ReaderIframePropsType,
  ReaderIframePropsOutType,
  ReaderIframeComponentType,
  ReaderIframeType,
}
