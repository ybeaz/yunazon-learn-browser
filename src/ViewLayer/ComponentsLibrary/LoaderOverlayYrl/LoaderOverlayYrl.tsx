import React from 'react'
import { useSelector } from 'react-redux'

import { getClasses } from '../../../Shared/getClasses'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

import {
  LoaderOverlayYrlPropsType,
  LoaderOverlayYrlPropsOutType,
  LoaderOverlayYrlComponentType,
  LoaderOverlayYrlType,
} from './LoaderOverlayYrlTypes'

/**
 * @description Component to render LoaderOverlayYrl
 * @import import { LoaderOverlayYrl, LoaderOverlayYrlPropsType, LoaderOverlayYrlPropsOutType, LoaderOverlayYrlType } 
             from '../ComponentsLibrary/LoaderOverlayYrl/LoaderOverlayYrl'
 */
const LoaderOverlayYrlComponent: LoaderOverlayYrlComponentType = (
  props: LoaderOverlayYrlPropsType
) => {
  const {
    componentsState: { isLoaderOverlayVisible },
  } = useSelector((store2: RootStoreType) => store2)

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  const propsOut: LoaderOverlayYrlPropsOutType = {}

  return (
    <div className={getClasses(`LoaderOverlayYrl`, classAdd)}>
      <div className={`_spinner`}></div>
    </div>
  )
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
