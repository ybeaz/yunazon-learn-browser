import React from 'react'
import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import { TextStructuredPropsType } from '../../Components/TextStructured/TextStructured'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type TextStructuredColumnsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  summary: SummaryItemType[]
  objections: ObjectionType[]
  isObjections: RootStoreType['componentsState']['isObjections']
  isSummary: RootStoreType['componentsState']['isSummary']
  language: RootStoreType['language']
  titleSummary: string
  titleObjections: string
}

export type TextStructuredColumnsPropsType = Omit<
  TextStructuredColumnsComponentPropsType,
  'storeStateSlice'
>

export type TextStructuredColumnsPropsOut2Type = {
  buttonSummaryIsSummaryProps: ButtonYrlPropsType
  buttonSummaryIsObjectionsProps: ButtonYrlPropsType
}

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
