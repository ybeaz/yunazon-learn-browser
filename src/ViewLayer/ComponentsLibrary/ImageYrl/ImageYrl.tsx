import React from 'react'

import { handleEvents } from '../../../DataLayer/index.handleEvents'

import {
  ImageYrlPropsType,
  ImageYrlPropsOutType,
  ImageYrlComponentType,
  ImageYrlType,
} from './ImageYrlTypes'

/**
 * @description Component to render ImageYrl
 * @import import { ImageYrl, ImageYrlPropsType, ImageYrlPropsOutType, ImageYrlType } 
             from '../Components/ImageYrl/ImageYrl'
 */
const ImageYrlComponent: ImageYrlComponentType = (props: ImageYrlPropsType) => {
  const { classAdded, src, handleEvents: handleEventsCustom, action } = props

  let handleEventsToUse = handleEventsCustom ? handleEventsCustom : handleEvents
  handleEventsToUse = action ? handleEventsToUse : () => ({})
  const classCursor = action ? '_cursor' : ''

  const propsOut: ImageYrlPropsOutType = {}

  return (
    <div
      className={`Image ${classAdded}`}
      onClickCapture={(event: React.MouseEvent<HTMLDivElement>) =>
        handleEventsToUse(event, action)
      }
    >
      <img className={`_image ${classCursor}`} src={src} />
    </div>
  )
}

export const ImageYrl: ImageYrlType = React.memo(ImageYrlComponent)

export type {
  ImageYrlPropsType,
  ImageYrlPropsOutType,
  ImageYrlComponentType,
  ImageYrlType,
}
