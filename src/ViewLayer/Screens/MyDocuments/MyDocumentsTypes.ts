import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type MyDocumentsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type MyDocumentsPropsType = Omit<
  MyDocumentsComponentPropsType,
  'storeStateSlice'
>

export type MyDocumentsPropsOutType = Record<string, any>

/**
 * @import import { MyDocumentsComponentPropsType, MyDocumentsPropsType, MyDocumentsPropsOutType, MyDocumentsComponentType, MyDocumentsType } from './MyDocumentsTypes'
 */
export interface MyDocumentsComponentType
  extends React.FunctionComponent<MyDocumentsComponentPropsType> {
  (props: MyDocumentsComponentPropsType): React.ReactElement
}

export type MyDocumentsType = React.FunctionComponent<MyDocumentsPropsType>
