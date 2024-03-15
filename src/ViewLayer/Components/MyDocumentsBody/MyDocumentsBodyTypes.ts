import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { PaginationNavigationPropsType } from '../../Components/'

export type MyDocumentsBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  documents: RootStoreType['documents']
  language: RootStoreType['language']
  handleEvents: HandleEventType
}

export type MyDocumentsBodyPropsType = Omit<
  MyDocumentsBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type DocumentsTablePropsOutType = {
  linkToDocumentProps: any
  linkToModuleProps: any
  buttonDeactivateDocumentProps: ButtonYrlPropsType
}

export type MyDocumentsBodyPropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { MyDocumentsBodyComponentPropsType, MyDocumentsBodyPropsType, MyDocumentsBodyPropsOutType, MyDocumentsBodyComponentType, MyDocumentsBodyType } from './MyDocumentsBodyTypes'
 */
export interface MyDocumentsBodyComponentType
  extends React.FunctionComponent<MyDocumentsBodyComponentPropsType> {
  (props: MyDocumentsBodyComponentPropsType): React.ReactElement
}

export type MyDocumentsBodyType =
  React.FunctionComponent<MyDocumentsBodyPropsType>
