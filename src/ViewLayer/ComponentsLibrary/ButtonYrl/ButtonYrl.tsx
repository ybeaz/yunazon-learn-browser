import React from 'react'

import {
  ButtonYrlPropsType,
  ButtonYrlPropsOutType,
  ButtonYrlComponentType,
  ButtonYrlType,
} from './ButtonYrlTypes'

/**
 * @description Component to render ButtonYrl
 * @import import { ButtonYrl, ButtonYrlPropsType, ButtonYrlPropsOutType, ButtonYrlType } 
             from '../Components/ButtonYrl/ButtonYrl'
 */
const ButtonYrlComponent: ButtonYrlComponentType = (
  props: ButtonYrlPropsType
) => {
  const {} = props

  const propsOut: ButtonYrlPropsOutType = {}

  return <div className='ButtonYrl'>ButtonYrl</div>
}

export const ButtonYrl: ButtonYrlType = React.memo(ButtonYrlComponent)

export type {
  ButtonYrlPropsType,
  ButtonYrlPropsOutType,
  ButtonYrlComponentType,
  ButtonYrlType,
}
