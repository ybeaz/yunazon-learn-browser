import React from 'react'

export type TextToSpeechComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
  children?: React.ReactNode
}

export type TextToSpeechPropsType = Omit<TextToSpeechComponentPropsType, 'storeStateSlice'>

export type TextToSpeechPropsOutType = Record<string, any>

/**
 * @import import { TextToSpeechComponentPropsType, TextToSpeechPropsType, TextToSpeechPropsOutType, TextToSpeechComponentType, TextToSpeechType } from './TextToSpeechTypes'
 */
export interface TextToSpeechComponentType
  extends React.FunctionComponent<TextToSpeechComponentPropsType> {
  (props: TextToSpeechComponentPropsType): React.ReactElement
}

export type TextToSpeechType = React.FunctionComponent<TextToSpeechPropsType>
