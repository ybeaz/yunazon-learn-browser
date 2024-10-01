import { InputYrlPropsType, ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { HandleEventType } from '../../../DataLayer/index.handleEvents'

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
