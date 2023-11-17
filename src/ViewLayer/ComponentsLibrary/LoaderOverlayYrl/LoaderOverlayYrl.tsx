import React from 'react'

import {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
} from './LoaderOverlayYrlTypes'

/**
 * @description Component to render LoaderOverlayYrl
 * @import import { LoaderOverlayYrl, LoaderOverlayYrlPropsType, LoaderOverlayYrlPropsOutType, LoaderOverlayYrlType } 
             from '../Components/LoaderOverlayYrl/LoaderOverlayYrl'
 */
const LoaderOverlayYrlComponent: LoaderOverlayYrlComponentType = (
  props: LoaderOverlayYrlPropsType
) => {
  const {} = props

  const propsOut: LoaderOverlayYrlPropsOutType = {}

  return <div className='LoaderOverlayYrl'>LoaderOverlayYrl</div>
}

export const LoaderOverlayYrl: LoaderOverlayYrlType = React.memo(
  LoaderOverlayYrlComponent
)

export type {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
}
