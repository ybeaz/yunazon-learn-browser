import React from 'react'

import { InputYrlPropsType, ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type InputGroupComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type InputGroupPropsType = Omit<
  InputGroupComponentPropsType,
  'storeStateSlice'
>

export type InputGroupPropsOutType = {
  inputSearchProps: InputYrlPropsType
  buttonMdSearchProps: ButtonYrlPropsType
}

/**
 * @import import { InputGroupComponentPropsType, InputGroupPropsType, InputGroupPropsOutType, InputGroupComponentType, InputGroupType } from './InputGroupTypes'
 */
export interface InputGroupComponentType
  extends React.FunctionComponent<InputGroupComponentPropsType> {
  (props: InputGroupComponentPropsType): React.ReactElement
}

export type InputGroupType = React.FunctionComponent<InputGroupPropsType>
