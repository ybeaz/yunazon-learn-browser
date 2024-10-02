import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from 'yourails_view_layer_web'
import { CreditsTablePropsType, TagsDocsTablePropsType } from '../../Components/'

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
  tagsDocsTableProps: TagsDocsTablePropsType
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
