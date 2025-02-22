import { InputYrlPropsType, ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type FormInputNamesPropsType = {
  classAdded?: string | number | symbol | any
  language: string
  handleEvents: HandleEventType
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type FormInputNamesPropsOutType = {
  inputFirstNameProps: InputYrlPropsType
  inputMiddleNameProps: InputYrlPropsType
  inputLastNameProps: InputYrlPropsType
}

/**
 * @import import { FormInputNamesType } from './FormInputNamesType'
 */
export interface FormInputNamesComponentType
  extends React.FunctionComponent<FormInputNamesPropsType> {
  (props: FormInputNamesPropsType): React.ReactElement
}

export type FormInputNamesType = React.FunctionComponent<FormInputNamesPropsType>
