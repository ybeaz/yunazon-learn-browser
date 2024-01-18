import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type MyCoursesTableComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  courses: RootStoreType['courses']
  language: RootStoreType['language']
  handleEvents: HandleEventType
}

export type MyCoursesTablePropsType = Omit<
  MyCoursesTableComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type CoursesTablePropsOutType = {
  linkToCourseProps: any
  linkToModuleProps: any
  buttonDeactivateCourseProps: ButtonYrlPropsType
}

export type MyCoursesTablePropsOutType = Record<string, any>

/**
 * @import import { MyCoursesTableComponentPropsType, MyCoursesTablePropsType, MyCoursesTablePropsOutType, MyCoursesTableComponentType, MyCoursesTableType } from './MyCoursesTableTypes'
 */
export interface MyCoursesTableComponentType
  extends React.FunctionComponent<MyCoursesTableComponentPropsType> {
  (props: MyCoursesTableComponentPropsType): React.ReactElement
}

export type MyCoursesTableType =
  React.FunctionComponent<MyCoursesTablePropsType>
