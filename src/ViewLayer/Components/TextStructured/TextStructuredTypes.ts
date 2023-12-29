import React from 'react'
import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'

export type TextStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  testsEntities: (SummaryItemType | ObjectionType)[]
  title: string
}

export type TextStructuredPropsType = Omit<
  TextStructuredComponentPropsType,
  'storeStateSlice'
>

export type TextStructuredPropsOutType = Record<string, any>

/**
 * @import import { TextStructuredComponentPropsType, TextStructuredPropsType, TextStructuredPropsOutType, TextStructuredComponentType, TextStructuredType } from './TextStructuredTypes'
 */
export interface TextStructuredComponentType
  extends React.FunctionComponent<TextStructuredComponentPropsType> {
  (props: TextStructuredComponentPropsType): React.ReactElement
}

export type TextStructuredType =
  React.FunctionComponent<TextStructuredPropsType>
