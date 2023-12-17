import React from 'react'

import { getClasses } from '../../../Shared/getClasses'
import { withStoreStateSelectedYrl } from '../Hooks/withStoreStateSelectedYrl'

import {
  LoaderOverlayYrlComponentPropsType,
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
} from './LoaderOverlayYrlTypes'

/**
 * @description Component to render LoaderOverlayYrl
 * @import import { LoaderOverlayYrl, LoaderOverlayYrlPropsType, LoaderOverlayYrlPropsOutType, LoaderOverlayYrlType } 
             from '../ComponentsLibrary/'
 */
const LoaderOverlayYrlComponent: LoaderOverlayYrlComponentType = (
  props: LoaderOverlayYrlComponentPropsType
) => {
  const {
    storeStateSlice: { isLoaderOverlayVisible },
  } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  const propsOut: LoaderOverlayYrlPropsOutType = {}

  return (
    <div className={getClasses(`LoaderOverlayYrl`, classAdd)}>
      <div className={`_spinner`}></div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['isLoaderOverlayVisible']
export const LoaderOverlayYrl: LoaderOverlayYrlType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(LoaderOverlayYrlComponent)
)

export type {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
}
