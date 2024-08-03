import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { MainFramePropsType, HeaderFramePropsType } from '../../Frames/'
import { MyDocumentsBodyPropsType } from '../../Components/'

export type MyDocumentsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    documents: RootStoreType['documents']
    tagsCloud: RootStoreType['tagsCloud']
    pageDocuments: RootStoreType['componentsState']['pagination']['pageDocuments']
    pageTags: RootStoreType['componentsState']['pagination']['pageTags']
  }
  handleEvents: HandleEventType
}

export type MyDocumentsPropsType = Omit<
  MyDocumentsComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type MyDocumentsPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  myMyDocumentsBodyProps: MyDocumentsBodyPropsType
}

/**
 * @import import { MyDocumentsComponentPropsType, MyDocumentsPropsType, MyDocumentsPropsOutType, MyDocumentsComponentType, MyDocumentsType } from './MyDocumentsTypes'
 */
export interface MyDocumentsComponentType
  extends React.FunctionComponent<MyDocumentsComponentPropsType> {
  (props: MyDocumentsComponentPropsType): React.ReactElement
}

export type MyDocumentsType = React.FunctionComponent<MyDocumentsPropsType>
