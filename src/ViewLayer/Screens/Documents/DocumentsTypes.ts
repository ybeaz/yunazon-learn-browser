import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
import { MainFramePropsType, HeaderFramePropsType } from '../../Frames/'
import { DocumentsBodyPropsType } from '../../Components/'

export type DocumentsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    documents: RootStoreType['documents']
  }
  handleEvents: HandleEventType
}

export type DocumentsPropsType = Omit<
  DocumentsComponentPropsType,
  'storeStateSlice'
>

export type DocumentsPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: Omit<MainFramePropsType, 'children'>
  documentsBodyProps: DocumentsBodyPropsType
}

/**
 * @import import { DocumentsComponentPropsType, DocumentsPropsType, DocumentsPropsOutType, DocumentsComponentType, DocumentsType } from './DocumentsTypes'
 */
export interface DocumentsComponentType
  extends React.FunctionComponent<DocumentsComponentPropsType> {
  (props: DocumentsComponentPropsType): React.ReactElement
}

export type DocumentsType = React.FunctionComponent<DocumentsPropsType>
