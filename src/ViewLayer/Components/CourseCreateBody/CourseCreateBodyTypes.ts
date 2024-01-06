import React from 'react'

export type CourseCreateBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type CourseCreateBodyPropsType = Omit<
  CourseCreateBodyComponentPropsType,
  'storeStateSlice'
>

export type CourseCreateBodyPropsOutType = Record<string, any>

/**
 * @import import { CourseCreateBodyComponentPropsType, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyComponentType, CourseCreateBodyType } from './CourseCreateBodyTypes'
 */
export interface CourseCreateBodyComponentType
  extends React.FunctionComponent<CourseCreateBodyComponentPropsType> {
  (props: CourseCreateBodyComponentPropsType): React.ReactElement
}

export type CourseCreateBodyType =
  React.FunctionComponent<CourseCreateBodyPropsType>
