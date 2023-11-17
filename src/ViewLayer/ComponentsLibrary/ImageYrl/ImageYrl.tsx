import React from 'react'

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
  const {} = props

  const propsOut: ImageYrlPropsOutType = {}

  return <div className='ImageYrl'>ImageYrl</div>
}

export const ImageYrl: ImageYrlType = React.memo(ImageYrlComponent)

export type {
  ImageYrlPropsType,
  ImageYrlPropsOutType,
  ImageYrlComponentType,
  ImageYrlType,
}
