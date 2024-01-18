import React, { ReactElement } from 'react'
import { ActionReduxType } from '../../../Interfaces/ActionReduxType'

export type ConfirmationYesNoBodyYrlComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  message: string | string[]
  captureButton4Yes?: string | ReactElement // capture on the Yes/ Confirm button
  captureButton4No?: string | ReactElement // capture on the  No/ Cancel button
  action4Yes?: ActionReduxType // action to assign the button Yes/ Confirm
  action4No?: ActionReduxType // action to assign the button, No/ Cancel
  buttonRight?: 'YesConfirm' | 'NoCancel'
}

export type ConfirmationYesNoBodyYrlPropsType =
  ConfirmationYesNoBodyYrlComponentPropsType

export type ConfirmationYesNoBodyYrlPropsOutType = Record<string, any>

/**
 * @import import { ConfirmationYesNoBodyYrlComponentPropsType, ConfirmationYesNoBodyYrlPropsType, ConfirmationYesNoBodyYrlPropsOutType, ConfirmationYesNoBodyYrlComponentType, ConfirmationYesNoBodyYrlType } from './ConfirmationYesNoBodyYrlTypes'
 */
export interface ConfirmationYesNoBodyYrlComponentType
  extends React.FunctionComponent<ConfirmationYesNoBodyYrlComponentPropsType> {
  (props: ConfirmationYesNoBodyYrlComponentPropsType): React.ReactElement
}

export type ConfirmationYesNoBodyYrlType =
  React.FunctionComponent<ConfirmationYesNoBodyYrlPropsType>
