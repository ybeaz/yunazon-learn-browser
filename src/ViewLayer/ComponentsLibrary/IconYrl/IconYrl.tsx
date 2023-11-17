import React from 'react'

import {
  IconYrlPropsType,
  IconYrlPropsOutType,
  IconYrlComponentType,
  IconYrlType,
} from './IconYrlTypes'

/**
 * @description Component to render IconYrl
 * @import import { IconYrl, IconYrlPropsType, IconYrlPropsOutType, IconYrlType } 
             from '../Components/IconYrl/IconYrl'
 */
const IconYrlComponent: IconYrlComponentType = (props: IconYrlPropsType) => {
  const {} = props

  const propsOut: IconYrlPropsOutType = {}

  return <div className='IconYrl'>IconYrl</div>
}

export const IconYrl: IconYrlType = React.memo(IconYrlComponent)

export type {
  IconYrlPropsType,
  IconYrlPropsOutType,
  IconYrlComponentType,
  IconYrlType,
}
