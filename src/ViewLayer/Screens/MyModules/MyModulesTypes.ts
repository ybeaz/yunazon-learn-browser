import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MyModulesBodyPropsType } from '../../Components/'
import { MainFramePropsType } from '../../Frames/'

export type MyModulesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    language: RootStoreType['language']
    createModuleStages: RootStoreType['componentsState']['createModuleStages']
    moduleCreateProgress: RootStoreType['moduleCreateProgress']
    modules: RootStoreType['modules']
  }
  handleEvents: HandleEventType
}

export type MyModulesPropsType = Omit<MyModulesComponentPropsType, 'storeStateSlice'>

export type MyModulesPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  myModulesBodyProps: MyModulesBodyPropsType
}

/**
 * @import import { MyModulesComponentPropsType, MyModulesPropsType, MyModulesPropsOutType, MyModulesComponentType, MyModulesType } from './MyModulesTypes'
 */
export interface MyModulesComponentType
  extends React.FunctionComponent<MyModulesComponentPropsType> {
  (props: MyModulesComponentPropsType): React.ReactElement
}

export type MyModulesType = React.FunctionComponent<MyModulesPropsType>
