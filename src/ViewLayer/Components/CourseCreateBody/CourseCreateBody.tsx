import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  CourseCreateBodyComponentPropsType,
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
} from './CourseCreateBodyTypes'

/**
 * @description Component to render CourseCreateBody
 * @import import { CourseCreateBody, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyType } 
             from '../Components/CourseCreateBody/CourseCreateBody'
 */
const CourseCreateBodyComponent: CourseCreateBodyComponentType = (
  props: CourseCreateBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: CourseCreateBodyPropsOutType = {}

  return (
    <div className={getClasses('CourseCreateBody', classAdded)}>
      CourseCreateBody
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const CourseCreateBody: CourseCreateBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(CourseCreateBodyComponent)
)

export type {
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
}
