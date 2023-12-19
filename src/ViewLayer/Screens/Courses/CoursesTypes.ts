import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type CoursesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type CoursesPropsType = Omit<
  CoursesComponentPropsType,
  'storeStateSlice'
>

export type CoursesPropsOutType = Record<string, any>

/**
 * @import import { CoursesComponentPropsType, CoursesPropsType, CoursesPropsOutType, CoursesComponentType, CoursesType } from './CoursesTypes'
 */
export interface CoursesComponentType
  extends React.FunctionComponent<CoursesComponentPropsType> {
  (props: CoursesComponentPropsType): React.ReactElement
}

export type CoursesType = React.FunctionComponent<CoursesPropsType>
