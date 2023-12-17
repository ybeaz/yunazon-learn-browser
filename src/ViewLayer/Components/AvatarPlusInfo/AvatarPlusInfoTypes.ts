import { HandleEventType } from '../../../Interfaces/HandleEventType'
import { ImageYrlPropsType } from '../../ComponentsLibrary/'

export type AvatarPlusInfoPropsType = {
  classProps?: Record<string, string | string[]>
  pathname?: string
  handleEvents?: HandleEventType
  typeEvent?: string
  imgSrc?: string
  capture: string
  text: string
}

export type AvatarPlusInfoPropsOutType = {
  linkProps: {
    className?: string
    to: { pathname: string } | {}
    onClick: () => void
  }
  imageProps: ImageYrlPropsType
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoComponentType
  extends React.FunctionComponent<AvatarPlusInfoPropsType> {
  (props: AvatarPlusInfoPropsType): React.ReactElement
}

export type AvatarPlusInfoType =
  React.FunctionComponent<AvatarPlusInfoPropsType>
