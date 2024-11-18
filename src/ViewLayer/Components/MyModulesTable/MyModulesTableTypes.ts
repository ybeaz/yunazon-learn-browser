import React from 'react'

import { RootStoreType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

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

export type ModulesTablePropsOutType = {
  linkToModuleProps: any
  buttonDeactivateModuleProps: ButtonYrlPropsType
}

export type MyModulesTablePropsOutType = Record<string, any>

/**
 * @import import { MyModulesTableComponentPropsType, MyModulesTablePropsType, MyModulesTablePropsOutType, MyModulesTableComponentType, MyModulesTableType } from './MyModulesTableTypes'
 */
export interface MyModulesTableComponentType
  extends React.FunctionComponent<MyModulesTableComponentPropsType> {
  (props: MyModulesTableComponentPropsType): React.ReactElement
}

export type MyModulesTableType = React.FunctionComponent<MyModulesTablePropsType>
