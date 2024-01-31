import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type MyModulesTableComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  modules: RootStoreType['modules']
  language: RootStoreType['language']
  handleEvents: HandleEventType
}

export type MyModulesTablePropsType = Omit<
  MyModulesTableComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type CoursesTablePropsOutType = {
  linkToCourseProps: any
  linkToModuleProps: any
  buttonDeactivateCourseProps: ButtonYrlPropsType
}

export type MyModulesTablePropsOutType = Record<string, any>

/**
 * @import import { MyModulesTableComponentPropsType, MyModulesTablePropsType, MyModulesTablePropsOutType, MyModulesTableComponentType, MyModulesTableType } from './MyModulesTableTypes'
 */
export interface MyModulesTableComponentType
  extends React.FunctionComponent<MyModulesTableComponentPropsType> {
  (props: MyModulesTableComponentPropsType): React.ReactElement
}

export type MyModulesTableType =
  React.FunctionComponent<MyModulesTablePropsType>
