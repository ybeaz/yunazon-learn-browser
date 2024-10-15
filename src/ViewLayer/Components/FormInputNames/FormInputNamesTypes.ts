import { InputYrlPropsType, ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type FormInputNamesPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: string
  buttonForwardProps: ButtonYrlPropsType
  handleEvents: HandleEventType
}

export type FormInputNamesPropsOutType = {
  inputFirstNameProps: InputYrlPropsType
  inputMiddleNameProps: InputYrlPropsType
  inputLastNameProps: InputYrlPropsType
  buttonForwardProps: ButtonYrlPropsType
}

/**
 * @import import { FormInputNamesType } from './FormInputNamesType'
 */
export interface FormInputNamesComponentType
  extends React.FunctionComponent<FormInputNamesPropsType> {
  (props: FormInputNamesPropsType): React.ReactElement
}

export type FormInputNamesType = React.FunctionComponent<FormInputNamesPropsType>
