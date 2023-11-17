import React from 'react'

import {
  FooterFramePropsType,
  FooterFramePropsOutType,
  FooterFrameComponentType,
  FooterFrameType,
} from './FooterFrameTypes'

/**
 * @description Component to render FooterFrame
 * @import import { FooterFrame, FooterFramePropsType, FooterFramePropsOutType, FooterFrameType } 
             from '../Components/FooterFrame/FooterFrame'
 */
const FooterFrameComponent: FooterFrameComponentType = (
  props: FooterFramePropsType
) => {
  const { children } = props

  const propsOut: FooterFramePropsOutType = {}

  return <div className='FooterFrame'>{children}</div>
}

export const FooterFrame: FooterFrameType = React.memo(FooterFrameComponent)

export type {
  FooterFramePropsType,
  FooterFramePropsOutType,
  FooterFrameComponentType,
  FooterFrameType,
}
