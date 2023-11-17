export type IconYrlPropsType = any

export type IconYrlPropsOutType = Record<string, any>

/**
 * @import import { IconYrlType } from './IconYrlType'
 */
export interface IconYrlComponentType
  extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement
}

export type IconYrlType = React.FunctionComponent<IconYrlPropsType>
