import React from 'react'

import { withPropsYrl } from '../../ComponentsLibrary/'
import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/Hooks/withStoreStateSelectedYrl'
import { getClasses } from '../../../Shared/getClasses'
import {
  Certificate2Body,
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyType,
} from '../../Components/Certificate2Body/Certificate2Body'
import {
  Certificate2ComponentPropsType,
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
} from './Certificate2Types'

/**
 * @description Component to render Certificate2
 * @link Inspired by: https://codepen.io/darthsteevo/pen/xxRgEbq
 * @import import { Certificate2, Certificate2PropsType, Certificate2PropsOutType, Certificate2Type } 
             from '../ViewLayer/Screens/Certificate2/Certificate2'
 */
const Certificate2Component: Certificate2ComponentType = (
  props: Certificate2ComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: Certificate2PropsOutType = {}

  return (
    <div className={getClasses('Certificate2', classAdded)}>
      <Certificate2Body />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const Certificate2: Certificate2Type = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Certificate2Component)
)

export type {
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
}
