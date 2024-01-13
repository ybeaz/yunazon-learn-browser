import React from 'react'

import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'

import {
  ImageYrlPropsType,
  ImageYrlPropsOutType,
  ImageYrlComponentType,
  ImageYrlType,
} from './ImageYrlTypes'

/**
 * @description Component to render ImageYrl
 * @propsOut 
    imageYrlProps: {
      classAdded: 'Image_bottom',
      src: `https://www.w3schools.com/bootstrap5/paris.jpg`,
    },
 * @import import { ImageYrl, ImageYrlPropsType, ImageYrlPropsOutType, ImageYrlType } 
             from '../ComponentsLibrary/'
 */
const ImageYrlComponent: ImageYrlComponentType = (props: ImageYrlPropsType) => {
  const {
    classAdded,
    src,
    handleEvents: handleEventsCustom,
    action,
    isDisplaying = true,
    isVisible = true,
  } = props

  const classDisplay = isDisplaying === true ? '' : 'Image_display_none'
  const classVisible = isVisible === true ? '' : 'Image_visible_none'

  let handleEventsToUse = handleEventsCustom ? handleEventsCustom : handleEvents
  handleEventsToUse = action ? handleEventsToUse : () => ({})
  const classCursor = action ? '_cursor' : ''

  const propsOut: ImageYrlPropsOutType = {}

  return (
    <div
      className={getClasses('ImageYrl', [
        classAdded,
        classDisplay,
        classVisible,
      ])}
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
