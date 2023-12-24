import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  AboutAcademyBodyComponentPropsType,
  AboutAcademyBodyPropsType,
  AboutAcademyBodyPropsOutType,
  AboutAcademyBodyComponentType,
  AboutAcademyBodyType,
} from './AboutAcademyBodyTypes'

/**
 * @description Component to render AboutAcademyBody
 * @import import { AboutAcademyBody, AboutAcademyBodyPropsType, AboutAcademyBodyPropsOutType, AboutAcademyBodyType } 
             from '../Components/AboutAcademyBody/AboutAcademyBody'
 */
const AboutAcademyBodyComponent: AboutAcademyBodyComponentType = (
  props: AboutAcademyBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: AboutAcademyBodyPropsOutType = {}

  return (
    <div className={getClasses('AboutAcademyBody', classAdded)}>
      AboutAcademyBody
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const AboutAcademyBody = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AboutAcademyBodyComponent)
)

export type {
  AboutAcademyBodyPropsType,
  AboutAcademyBodyPropsOutType,
  AboutAcademyBodyComponentType,
  AboutAcademyBodyType,
}
