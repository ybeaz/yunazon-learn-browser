import React from 'react'

import { TimerPropsType } from '../Timer/Timer'
import {
  ImageYrlPropsType,
  IconYrlPropsType,
  ButtonYrlPropsType,
  InputGroupYrlPropsType,
} from '../../ComponentsLibrary/'

import { CoursesBodyPropsType } from '../CoursesBody/CoursesBody'

import {
  CreateModuleStagesEnumType,
  RootStoreType,
  HandleEventPropsType,
  HandleEventType,
} from '../../../Interfaces/'

import { CreateCourseStatusEnumType } from '../../../Interfaces/RootStoreType'

export type StagesType = {
  name: string
  isActive: boolean
  action: HandleEventPropsType
  status: CreateCourseStatusEnumType
  timeCalculated: RootStoreType['componentsState']['createModuleStages'][CreateModuleStagesEnumType]['timeCalculated']
}

export type GetCourseCreateStagesPropsType = {
  createModuleStages: RootStoreType['componentsState']['createModuleStages']
}

export interface GetCourseCreateStagesType {
  (props: GetCourseCreateStagesPropsType): StagesType[]
}

export type StagesPropsOut = {
  iconToDoProps: IconYrlPropsType
  imagePendingProps: ImageYrlPropsType
  timerProps: TimerPropsType
  iconSuccessProps: IconYrlPropsType
  iconFailedProps: IconYrlPropsType
  buttonRepeatProps: ButtonYrlPropsType
}

export type CourseCreateBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    createModuleStages: RootStoreType['componentsState']['createModuleStages']
    courseCreateProgress: RootStoreType['courseCreateProgress']
    courses: RootStoreType['courses']
  }
  handleEvents: HandleEventType
}

export type CourseCreateBodyPropsType = Omit<
  CourseCreateBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type CourseCreateBodyPropsOutType = {
  inputGroupProps: InputGroupYrlPropsType
  coursesBodyProps: CoursesBodyPropsType
}

/**
 * @import import { CourseCreateBodyComponentPropsType, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyComponentType, CourseCreateBodyType } from './CourseCreateBodyTypes'
 */
export interface CourseCreateBodyComponentType
  extends React.FunctionComponent<CourseCreateBodyComponentPropsType> {
  (props: CourseCreateBodyComponentPropsType): React.ReactElement
}

export type CourseCreateBodyType =
  React.FunctionComponent<CourseCreateBodyPropsType>
