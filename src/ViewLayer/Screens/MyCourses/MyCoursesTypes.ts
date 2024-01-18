import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MyCoursesBodyPropsType } from '../../Components/'
import { MainFramePropsType } from '../../Frames/'

export type MyCoursesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    language: RootStoreType['language']
    createModuleStages: RootStoreType['componentsState']['createModuleStages']
    courseCreateProgress: RootStoreType['courseCreateProgress']
    courses: RootStoreType['courses']
  }
  handleEvents: HandleEventType
}

export type MyCoursesPropsType = Omit<
  MyCoursesComponentPropsType,
  'storeStateSlice'
>

export type MyCoursesPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: MainFramePropsType
  myCoursesBodyProps: MyCoursesBodyPropsType
}

/**
 * @import import { MyCoursesComponentPropsType, MyCoursesPropsType, MyCoursesPropsOutType, MyCoursesComponentType, MyCoursesType } from './MyCoursesTypes'
 */
export interface MyCoursesComponentType
  extends React.FunctionComponent<MyCoursesComponentPropsType> {
  (props: MyCoursesComponentPropsType): React.ReactElement
}

export type MyCoursesType = React.FunctionComponent<MyCoursesPropsType>
