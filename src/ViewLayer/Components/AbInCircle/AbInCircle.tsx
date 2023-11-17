import React from 'react'

import {
  AbInCirclePropsType,
  AbInCirclePropsOutType,
  AbInCircleComponentType,
  AbInCircleType,
} from './AbInCircleTypes'

/**
 * @description Component to render AbInCircle
 * @import import { AbInCircle, AbInCirclePropsType, AbInCirclePropsOutType, AbInCircleType } 
             from '../Components/AbInCircle/AbInCircle'
 */
const AbInCircleComponent: AbInCircleComponentType = (
  props: AbInCirclePropsType
) => {
  const {} = props

  const propsOut: AbInCirclePropsOutType = {}

  return <div className='AbInCircle'>AbInCircle</div>
}

export const AbInCircle: AbInCircleType = React.memo(AbInCircleComponent)

export type {
  AbInCirclePropsType,
  AbInCirclePropsOutType,
  AbInCircleComponentType,
  AbInCircleType,
}
