import React from 'react'

import {
  ImageYrlPropsType,
  IconYrlPropsType,
  ButtonYrlPropsType,
} from '../../ComponentsLibrary/'
import {
  RootStoreType,
  HandleEventPropsType,
  HandleEventType,
} from '../../../Interfaces/'

export type StagesType = {
  name: string
  action: HandleEventPropsType
  isToDo: boolean
  isPending: boolean
  isSuccess: boolean
  isFailed: boolean
  isRepeat: boolean
}

export interface GetCourseCreateStagesType {
  (): StagesType[]
}

export type StagespropsOut = {
  iconToDoProps: IconYrlPropsType
  imagePendingProps: ImageYrlPropsType
  iconSuccessProps: IconYrlPropsType
  iconFailedProps: IconYrlPropsType
  buttonRepeatProps: ButtonYrlPropsType
}

export type CourseCreateBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
  handleEvents: HandleEventType
}

export type CourseCreateBodyPropsType = Omit<
  CourseCreateBodyComponentPropsType,
  'storeStateSlice'
>

export type CourseCreateBodyPropsOutType = {}

/**
 * @import import { CourseCreateBodyComponentPropsType, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyComponentType, CourseCreateBodyType } from './CourseCreateBodyTypes'
 */
export interface CourseCreateBodyComponentType
  extends React.FunctionComponent<CourseCreateBodyComponentPropsType> {
  (props: CourseCreateBodyComponentPropsType): React.ReactElement
}

export type CourseCreateBodyType =
  React.FunctionComponent<CourseCreateBodyPropsType>
