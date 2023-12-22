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

const propsDefault = {
  classMain: 'LoaderOverlay3Yrl',
}

/**
 * @description Component to render LoaderOverlayYrl
 * @import import { LoaderOverlayYrl, LoaderOverlayYrlPropsType, LoaderOverlayYrlPropsOutType, LoaderOverlayYrlType } 
             from '../ComponentsLibrary/'
 */
const LoaderOverlayYrlComponent: LoaderOverlayYrlComponentType = (
  propsIn: LoaderOverlayYrlComponentPropsType
) => {
  const props = { ...propsDefault, ...propsIn }

  const {
    classMain,
    storeStateSlice: { isLoaderOverlayVisible },
  } = props

  const classAdd = isLoaderOverlayVisible ? `${classMain}_show` : ''

  const propsOut: LoaderOverlayYrlPropsOutType = {}

  return (
    <div className={getClasses(classMain, classAdd)}>
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
