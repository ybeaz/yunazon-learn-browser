import React from 'react'

import { InputYrlPropsType, ButtonYrlPropsType } from 'yourails_view_layer_web'

export type InputGroupYrlComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  inputProps: InputYrlPropsType
  buttonSubmitProps: ButtonYrlPropsType
}

export type InputGroupYrlPropsType = Omit<InputGroupYrlComponentPropsType, 'storeStateSlice'>

export type InputGroupYrlPropsOutType = {
  inputProps: InputYrlPropsType
  buttonSubmitProps: ButtonYrlPropsType
}

/**
 * @import import { InputGroupYrlComponentPropsType, InputGroupYrlPropsType, InputGroupYrlPropsOutType, InputGroupYrlComponentType, InputGroupYrlType } from './InputGroupYrlTypes'
 */
export interface InputGroupYrlComponentType
  extends React.FunctionComponent<InputGroupYrlComponentPropsType> {
  (props: InputGroupYrlComponentPropsType): React.ReactElement
}

export type InputGroupYrlType = React.FunctionComponent<InputGroupYrlPropsType>
