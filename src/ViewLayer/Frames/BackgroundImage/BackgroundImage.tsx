import React from 'react'

import {
  BackgroundImagePropsType,
  BackgroundImagePropsOutType,
  BackgroundImageComponentType,
  BackgroundImageType,
} from './BackgroundImageTypes'

/**
 * @description Component to render BackgroundImage
 * @import import { BackgroundImage, BackgroundImagePropsType, BackgroundImagePropsOutType, BackgroundImageType } 
             from '../Components/BackgroundImage/BackgroundImage'
 */
const BackgroundImageComponent: BackgroundImageComponentType = (
  props: BackgroundImagePropsType
) => {
  const {} = props

  const propsOut: BackgroundImagePropsOutType = {}

  return <div className='BackgroundImage'>BackgroundImage</div>
}

export const BackgroundImage: BackgroundImageType = React.memo(
  BackgroundImageComponent
)

export type {
  BackgroundImagePropsType,
  BackgroundImagePropsOutType,
  BackgroundImageComponentType,
  BackgroundImageType,
}
