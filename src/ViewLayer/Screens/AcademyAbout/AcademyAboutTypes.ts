import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type AcademyAboutComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type AcademyAboutPropsType = Omit<AcademyAboutComponentPropsType, 'storeStateSlice'>

export type AcademyAboutPropsOutType = Record<string, any>

/**
 * @import import { AcademyAboutComponentPropsType, AcademyAboutPropsType, AcademyAboutPropsOutType, AcademyAboutComponentType, AcademyAboutType } from './AcademyAboutTypes'
 */
export interface AcademyAboutComponentType
  extends React.FunctionComponent<AcademyAboutComponentPropsType> {
  (props: AcademyAboutComponentPropsType): React.ReactElement
}

export type AcademyAboutType = React.FunctionComponent<AcademyAboutPropsType>
