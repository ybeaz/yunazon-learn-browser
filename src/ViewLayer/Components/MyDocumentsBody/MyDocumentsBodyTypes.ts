import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { CreditsTablePropsType, PaginationNavigationPropsType } from '../../Components/'

export type MyDocumentsBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  documents: RootStoreType['documents']
  tagsCloud: RootStoreType['tagsCloud']
  pageDocuments: RootStoreType['componentsState']['pagination']['pageDocuments']
  pageTags: RootStoreType['componentsState']['pagination']['pageTags']
}

export type MyDocumentsBodyPropsType = Omit<
  MyDocumentsBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type MyDocumentsBodyPropsOutType = {
  creditsTableProps: CreditsTablePropsType
}

/**
 * @import import { MyDocumentsBodyComponentPropsType, MyDocumentsBodyPropsType, MyDocumentsBodyPropsOutType, MyDocumentsBodyComponentType, MyDocumentsBodyType } from './MyDocumentsBodyTypes'
 */
export interface MyDocumentsBodyComponentType
  extends React.FunctionComponent<MyDocumentsBodyComponentPropsType> {
  (props: MyDocumentsBodyComponentPropsType): React.ReactElement
}

export type MyDocumentsBodyType = React.FunctionComponent<MyDocumentsBodyPropsType>
