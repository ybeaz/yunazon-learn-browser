export type AbInCirclePropsType = any

export type AbInCirclePropsOutType = Record<string, any>

/**
 * @import import { AbInCircleType } from './AbInCircleType'
 */
export interface AbInCircleComponentType
  extends React.FunctionComponent<AbInCirclePropsType> {
  (props: AbInCirclePropsType): React.ReactElement
}

export type AbInCircleType = React.FunctionComponent<AbInCirclePropsType>
