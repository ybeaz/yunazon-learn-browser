import React from 'react'
import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import { TextStructuredPropsType } from '../../Components/TextStructured/TextStructured'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type TextStructuredColumnsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  summary: SummaryItemType[]
  objections: ObjectionType[]
  isObjections: RootStoreType['componentsState']['isObjections']
  isSummary: RootStoreType['componentsState']['isSummary']
}

export type TextStructuredColumnsPropsType = Omit<
  TextStructuredColumnsComponentPropsType,
  'storeStateSlice'
>

export type TextStructuredColumnsPropsOutType = {
  summaryProps: TextStructuredPropsType
  objectionsProps: TextStructuredPropsType
}

/**
 * @import import { TextStructuredColumnsComponentPropsType, TextStructuredColumnsPropsType, TextStructuredColumnsPropsOutType, TextStructuredColumnsComponentType, TextStructuredColumnsType } from './TextStructuredColumnsTypes'
 */
export interface TextStructuredColumnsComponentType
  extends React.FunctionComponent<TextStructuredColumnsComponentPropsType> {
  (props: TextStructuredColumnsComponentPropsType): React.ReactElement
}

export type TextStructuredColumnsType =
  React.FunctionComponent<TextStructuredColumnsPropsType>
