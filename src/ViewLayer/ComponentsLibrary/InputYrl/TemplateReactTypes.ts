export type InputYrlPropsType = any

export type InputYrlPropsOutType = Record<string, any>

/**
 * @import import { InputYrlType } from './InputYrlType'
 */
export interface InputYrlComponentType
  extends React.FunctionComponent<InputYrlPropsType> {
  (props: InputYrlPropsType): React.ReactElement
}

export type InputYrlType = React.FunctionComponent<InputYrlPropsType>
