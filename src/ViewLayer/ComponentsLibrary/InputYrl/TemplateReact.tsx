import React from 'react'

import {
  InputYrlPropsType,
  InputYrlPropsOutType,
  InputYrlComponentType,
  InputYrlType,
} from './InputYrlTypes'

/**
 * @description Component to render InputYrl
 * @import import { InputYrl, InputYrlPropsType, InputYrlPropsOutType, InputYrlType } 
             from '../Components/InputYrl/InputYrl'
 */
const InputYrlComponent: InputYrlComponentType = (props: InputYrlPropsType) => {
  const {} = props

  const propsOut: InputYrlPropsOutType = {}

  return <div className='InputYrl'>InputYrl</div>
}

export const InputYrl: InputYrlType = React.memo(InputYrlComponent)

export type {
  InputYrlPropsType,
  InputYrlPropsOutType,
  InputYrlComponentType,
  InputYrlType,
}
