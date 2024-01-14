import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MyCoursesBodyPropsType } from '../../Components/'
import { MainFramePropsType } from '../../Frames/'

export type MyCoursesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
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
  courseCreateBodyProps: MyCoursesBodyPropsType
}

/**
 * @import import { MyCoursesComponentPropsType, MyCoursesPropsType, MyCoursesPropsOutType, MyCoursesComponentType, MyCoursesType } from './MyCoursesTypes'
 */
export interface MyCoursesComponentType
  extends React.FunctionComponent<MyCoursesComponentPropsType> {
  (props: MyCoursesComponentPropsType): React.ReactElement
}

export type MyCoursesType = React.FunctionComponent<MyCoursesPropsType>
