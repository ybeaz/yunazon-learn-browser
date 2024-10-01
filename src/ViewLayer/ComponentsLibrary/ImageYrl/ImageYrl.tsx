import React from 'react'

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
    handleEvents,
    action,
    isDisplaying = true,
    isVisible = true,
    opacity = 1,
  } = props

  const classDisplay = isDisplaying === true ? '' : 'Image_display_none'
  const classVisible = isVisible === true ? '' : 'Image_visible_none'

  const classCursor = action ? '_cursor' : ''

  const propsOut: ImageYrlPropsOutType = {}

  return (
    <div
      className={getClasses('ImageYrl', [classAdded, classDisplay, classVisible])}
      style={{ opacity }}
      onClickCapture={(event: React.MouseEvent<HTMLDivElement>) => handleEvents(event, action)}
    >
      <img className={`_image ${classCursor}`} src={src} />
    </div>
  )
}

export const ImageYrl: ImageYrlType = React.memo(ImageYrlComponent)

export type { ImageYrlPropsType, ImageYrlPropsOutType, ImageYrlComponentType, ImageYrlType }
