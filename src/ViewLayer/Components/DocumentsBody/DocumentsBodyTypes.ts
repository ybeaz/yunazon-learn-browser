import React from 'react'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'

export type DocumentsBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  documents: RootStoreType['documents']
  handleEvents: HandleEventType
}

export type DocumentsBodyPropsType = Omit<
  DocumentsBodyComponentPropsType,
  'storeStateSlice'
>

export type DocumentsBodyPropsOutType = Record<string, any>

/**
 * @import import { DocumentsBodyComponentPropsType, DocumentsBodyPropsType, DocumentsBodyPropsOutType, DocumentsBodyComponentType, DocumentsBodyType } from './DocumentsBodyTypes'
 */
export interface DocumentsBodyComponentType
  extends React.FunctionComponent<DocumentsBodyComponentPropsType> {
  (props: DocumentsBodyComponentPropsType): React.ReactElement
}

export type DocumentsBodyType = React.FunctionComponent<DocumentsBodyPropsType>
