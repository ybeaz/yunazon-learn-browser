import React from 'react'

import { getClasses } from '../../../Shared/getClasses'
import { withStoreStateSelectedYrl } from '../Hooks/withStoreStateSelectedYrl'

import {
  NoSeoIndexingYrlComponentPropsType,
  NoSeoIndexingYrlPropsType,
  NoSeoIndexingYrlPropsOutType,
  NoSeoIndexingYrlComponentType,
  NoSeoIndexingYrlType,
} from './NoSeoIndexingYrlTypes'

const propsDefault = {
  classMain: 'LoaderOverlay3Yrl',
}

/**
 * @description Component to render NoSeoIndexingYrl
 * @import import { NoSeoIndexingYrl, NoSeoIndexingYrlPropsType, NoSeoIndexingYrlPropsOutType, NoSeoIndexingYrlType } 
             from '../ComponentsLibrary/'
 */
const NoSeoIndexingYrlComponent: NoSeoIndexingYrlComponentType = (
  propsIn: NoSeoIndexingYrlComponentPropsType
) => {
  const props = { ...propsDefault, ...propsIn }

  const {
    classMain,
    storeStateSlice: { isLoaderOverlayVisible },
  } = props

  const classAdd = isLoaderOverlayVisible ? `${classMain}_show` : ''

  const propsOut: NoSeoIndexingYrlPropsOutType = {}

  return (
    <div className={getClasses(classMain, classAdd)}>
      <div className={`_spinner`}></div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['isLoaderOverlayVisible']
export const NoSeoIndexingYrl: NoSeoIndexingYrlType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(NoSeoIndexingYrlComponent)
)

export type {
  NoSeoIndexingYrlPropsType,
  NoSeoIndexingYrlPropsOutType,
  NoSeoIndexingYrlComponentType,
  NoSeoIndexingYrlType,
}
