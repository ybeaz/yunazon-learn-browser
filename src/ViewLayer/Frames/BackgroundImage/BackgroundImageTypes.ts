export type BackgroundImagePropsType = any

export type BackgroundImagePropsOutType = Record<string, any>

/**
 * @import import { BackgroundImageType } from './BackgroundImageType'
 */
export interface BackgroundImageComponentType
  extends React.FunctionComponent<BackgroundImagePropsType> {
  (props: BackgroundImagePropsType): React.ReactElement
}

export type BackgroundImageType =
  React.FunctionComponent<BackgroundImagePropsType>
