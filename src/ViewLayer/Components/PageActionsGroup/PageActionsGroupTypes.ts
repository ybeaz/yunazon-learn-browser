import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type PageActionsGroupComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  courseCapture?: string
  documentID?: string
  courseID?: string
  contentID?: string
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type PageActionsGroupPropsType = Omit<
  PageActionsGroupComponentPropsType,
  'storeStateSlice'
>

export type PageActionsGroupPropsOutType = {
  buttonPrintProps: ButtonYrlPropsType
  buttonEmailProps: ButtonYrlPropsType
  buttonCopyLinkProps: ButtonYrlPropsType
}

/**
 * @import import { PageActionsGroupComponentPropsType, PageActionsGroupPropsType, PageActionsGroupPropsOutType, PageActionsGroupComponentType, PageActionsGroupType } from './PageActionsGroupTypes'
 */
export interface PageActionsGroupComponentType
  extends React.FunctionComponent<PageActionsGroupComponentPropsType> {
  (props: PageActionsGroupComponentPropsType): React.ReactElement
}

export type PageActionsGroupType =
  React.FunctionComponent<PageActionsGroupPropsType>
