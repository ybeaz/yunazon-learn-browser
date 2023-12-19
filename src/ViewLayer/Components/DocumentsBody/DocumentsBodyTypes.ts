import React from 'react'

export type DocumentsBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
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
