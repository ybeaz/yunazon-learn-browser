import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { CourseCreateBodyPropsType } from '../../Components/'
import { MainFramePropsType } from '../../Frames/'

export type CourseCreateComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    articles: RootStoreType['articles']
    language: RootStoreType['language']
  }
}

export type CourseCreatePropsType = Omit<
  CourseCreateComponentPropsType,
  'storeStateSlice'
>

export type CourseCreatePropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: MainFramePropsType
  courseCreateBodyProps: CourseCreateBodyPropsType
}

/**
 * @import import { CourseCreateComponentPropsType, CourseCreatePropsType, CourseCreatePropsOutType, CourseCreateComponentType, CourseCreateType } from './CourseCreateTypes'
 */
export interface CourseCreateComponentType
  extends React.FunctionComponent<CourseCreateComponentPropsType> {
  (props: CourseCreateComponentPropsType): React.ReactElement
}

export type CourseCreateType = React.FunctionComponent<CourseCreatePropsType>
