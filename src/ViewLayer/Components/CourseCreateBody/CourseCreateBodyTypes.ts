import React from 'react'

import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { RootStoreType, ActionEventType } from '../../../Interfaces/'

export type CourseCreateBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
  handleEvents: ActionEventType
}

export type CourseCreateBodyPropsType = Omit<
  CourseCreateBodyComponentPropsType,
  'storeStateSlice'
>

export type CourseCreateBodyPropsOutType = {
  buttonMetaDataProps: ButtonYrlPropsType
  buttonTranscriptProps: ButtonYrlPropsType
  buttonSummaryProps: ButtonYrlPropsType
  buttonQuestionsProps: ButtonYrlPropsType
  buttonObjectionsProps: ButtonYrlPropsType
  buttonFinalisedProps: ButtonYrlPropsType
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
