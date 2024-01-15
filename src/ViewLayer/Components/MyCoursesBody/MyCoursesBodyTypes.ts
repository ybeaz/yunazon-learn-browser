import React from 'react'

import { TimerPropsType } from '../Timer/Timer'
import {
  ImageYrlPropsType,
  IconYrlPropsType,
  ButtonYrlPropsType,
  InputGroupYrlPropsType,
} from '../../ComponentsLibrary/'
import { PaginationNavigationPropsType } from '../../Components/'
import { MyCoursesTablePropsType } from '../MyCoursesTable/MyCoursesTable'

import {
  CreateModuleStagesEnumType,
  RootStoreType,
  HandleEventPropsType,
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

export type MyCoursesBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  createModuleStages: RootStoreType['componentsState']['createModuleStages']
  courseCreateProgress: RootStoreType['courseCreateProgress']
  courses: RootStoreType['courses']
  isStatePendingAny: boolean
}

export type MyCoursesBodyPropsType = Omit<
  MyCoursesBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type MyCoursesBodyPropsOutType = {
  inputGroupProps: InputGroupYrlPropsType
  myCoursesTableProps: MyCoursesTablePropsType
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { MyCoursesBodyComponentPropsType, MyCoursesBodyPropsType, MyCoursesBodyPropsOutType, MyCoursesBodyComponentType, MyCoursesBodyType } from './MyCoursesBodyTypes'
 */
export interface MyCoursesBodyComponentType
  extends React.FunctionComponent<MyCoursesBodyComponentPropsType> {
  (props: MyCoursesBodyComponentPropsType): React.ReactElement
}

export type MyCoursesBodyType = React.FunctionComponent<MyCoursesBodyPropsType>
