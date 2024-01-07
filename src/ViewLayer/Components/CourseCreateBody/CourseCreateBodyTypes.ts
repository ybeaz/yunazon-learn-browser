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

import { CreateCourseStatusEnumType } from '../../../Interfaces/RootStoreType'

export type StagesType = {
  name: string
  action: HandleEventPropsType
  status: CreateCourseStatusEnumType
}

export type GetCourseCreateStagesPropsType = {
  createModuleStages: RootStoreType['componentsState']['createModuleStages']
}

export interface GetCourseCreateStagesType {
  (props: GetCourseCreateStagesPropsType): StagesType[]
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
    createModuleStages: RootStoreType['componentsState']['createModuleStages']
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
