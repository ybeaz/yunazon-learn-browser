import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface AbInCirclePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  text: string
  colors2: Record<string, string>
  testID?: string
}

export type AbInCirclePropsOutType = Record<string, any>

/**
 * @import import { AbInCircleType } from './AbInCircleType'
 */
export interface AbInCircleType
  extends React.FunctionComponent<AbInCirclePropsType> {
  (props: AbInCirclePropsType): React.ReactElement
}
