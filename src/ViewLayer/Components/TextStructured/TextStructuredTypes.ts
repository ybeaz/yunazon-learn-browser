import React from 'react'
import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import { SectionType } from '../../../@types/ArticleMockType'

export type EntitiyItemType = {
  capture?:
    | SummaryItemType['capture']
    | ObjectionType['capture']
    | SectionType['capture']
  text?: SummaryItemType['text'] | ObjectionType['text']
  divs?: SectionType['divs']
  options?: SectionType['options']
}

export type TextStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  entities: EntitiyItemType[]
  capture: string
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
