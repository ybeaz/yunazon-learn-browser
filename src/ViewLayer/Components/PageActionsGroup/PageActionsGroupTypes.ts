import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from 'yourails_view_layer_web'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'

export type PageActionsGroupComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  moduleCapture?: string
  documentID?: string
  moduleID?: string
  contentID?: string
  tagID?: string
  storeStateSlice: {
    language: RootStoreType['language']
  }
  handleEvents: HandleEventType
}

export type PageActionsGroupPropsType = Omit<
  PageActionsGroupComponentPropsType,
  'storeStateSlice' | 'handleEvents'
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

export type PageActionsGroupType = React.FunctionComponent<PageActionsGroupPropsType>
