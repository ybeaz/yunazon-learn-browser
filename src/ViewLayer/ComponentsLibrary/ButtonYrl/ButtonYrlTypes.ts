export type ButtonYrlPropsType = any

export type ButtonYrlPropsOutType = Record<string, any>

/**
 * @import import { ButtonYrlType } from './ButtonYrlType'
 */
export interface ButtonYrlComponentType
  extends React.FunctionComponent<ButtonYrlPropsType> {
  (props: ButtonYrlPropsType): React.ReactElement
}

export type ButtonYrlType = React.FunctionComponent<ButtonYrlPropsType>
