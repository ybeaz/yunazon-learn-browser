import React from 'react'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'
import { ButtonYrlPropsType } from 'yourails_common'

export type FormInputNamesWithButtonsComponentPropsType = {
  classAdded?: string | number | symbol | any
  formInputNamesProps: FormInputNamesPropsType
  buttonConfirmEditNameProps: ButtonYrlPropsType
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type FormInputNamesWithButtonsPropsType = Omit<
  FormInputNamesWithButtonsComponentPropsType,
  'storeStateSlice'
>

export type FormInputNamesWithButtonsPropsOutType = {
  formInputNamesProps: FormInputNamesPropsType
  buttonConfirmEditNameProps: ButtonYrlPropsType
}

/**
 * @import import { FormInputNamesWithButtonsComponentPropsType, FormInputNamesWithButtonsPropsType, FormInputNamesWithButtonsPropsOutType, FormInputNamesWithButtonsComponentType, FormInputNamesWithButtonsType } from './FormInputNamesWithButtonsTypes'
 */
export interface FormInputNamesWithButtonsComponentType
  extends React.FunctionComponent<FormInputNamesWithButtonsComponentPropsType> {
  (props: FormInputNamesWithButtonsComponentPropsType): React.ReactElement
}

export type FormInputNamesWithButtonsType =
  React.FunctionComponent<FormInputNamesWithButtonsPropsType>
