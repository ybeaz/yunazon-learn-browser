import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  Certificate2BodyComponentPropsType,
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
} from './Certificate2BodyTypes'

/**
 * @description Component to render Certificate2Body
 * @import import { Certificate2Body, Certificate2BodyPropsType, Certificate2BodyPropsOutType, Certificate2BodyType } 
             from '../Components/Certificate2Body/Certificate2Body'
 */
const Certificate2BodyComponent: Certificate2BodyComponentType = (
  props: Certificate2BodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: Certificate2BodyPropsOutType = {}

  return <div className={getClasses('Certificate2Body', classAdded)}>Certificate2Body</div>
}

const storeStateSliceProps: string[] = []
export const Certificate2Body: Certificate2BodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Certificate2BodyComponent)
)

export type {
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
}
