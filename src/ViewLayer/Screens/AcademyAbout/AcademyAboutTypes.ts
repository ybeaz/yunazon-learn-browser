import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'

export type AcademyAboutComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type AcademyAboutPropsType = Omit<AcademyAboutComponentPropsType, 'storeStateSlice'>

export type AcademyAboutPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: MainFramePropsType
}

/**
 * @import import { AcademyAboutComponentPropsType, AcademyAboutPropsType, AcademyAboutPropsOutType, AcademyAboutComponentType, AcademyAboutType } from './AcademyAboutTypes'
 */
export interface AcademyAboutComponentType
  extends React.FunctionComponent<AcademyAboutComponentPropsType> {
  (props: AcademyAboutComponentPropsType): React.ReactElement
}

export type AcademyAboutType = React.FunctionComponent<AcademyAboutPropsType>
