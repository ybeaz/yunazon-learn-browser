import React from 'react'

export type TextsPartsStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type TextsPartsStructuredPropsType = TextsPartsStructuredComponentPropsType

export type TextsPartsStructuredPropsOutType = Record<string, any>

/**
 * @import import { TextsPartsStructuredComponentPropsType, TextsPartsStructuredPropsType, TextsPartsStructuredPropsOutType, TextsPartsStructuredComponentType, TextsPartsStructuredType } from './TextsPartsStructuredTypes'
 */
export interface TextsPartsStructuredComponentType
  extends React.FunctionComponent<TextsPartsStructuredComponentPropsType> {
  (props: TextsPartsStructuredComponentPropsType): React.ReactElement
}

export type TextsPartsStructuredType = React.NamedExoticComponent<TextsPartsStructuredPropsType>
