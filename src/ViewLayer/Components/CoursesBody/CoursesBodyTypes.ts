import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type CoursesBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  courses: RootStoreType['courses']
  language: RootStoreType['language']
  handleEvents: HandleEventType
}

export type CoursesBodyPropsType = Omit<
  CoursesBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type CoursesTablePropsOutType = {
  linkToCourseProps: any
  linkToModuleProps: any
  buttonDeactivateCourseProps: ButtonYrlPropsType
}

export type CoursesBodyPropsOutType = Record<string, any>

/**
 * @import import { CoursesBodyComponentPropsType, CoursesBodyPropsType, CoursesBodyPropsOutType, CoursesBodyComponentType, CoursesBodyType } from './CoursesBodyTypes'
 */
export interface CoursesBodyComponentType
  extends React.FunctionComponent<CoursesBodyComponentPropsType> {
  (props: CoursesBodyComponentPropsType): React.ReactElement
}

export type CoursesBodyType = React.FunctionComponent<CoursesBodyPropsType>
