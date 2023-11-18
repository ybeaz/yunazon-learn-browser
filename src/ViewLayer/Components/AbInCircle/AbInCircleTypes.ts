export type AbInCirclePropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  text: string
  colors2?: Record<string, string>
}

export type AbInCirclePropsOutType = Record<string, any>

/**
 * @import import { AbInCircleType } from './AbInCircleType'
 */
export interface AbInCircleComponentType
  extends React.FunctionComponent<AbInCirclePropsType> {
  (props: AbInCirclePropsType): React.ReactElement
}

export type AbInCircleType = React.FunctionComponent<AbInCirclePropsType>
