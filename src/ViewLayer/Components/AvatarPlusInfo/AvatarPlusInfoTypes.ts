import { HandleEventType } from 'yourails_common'
import { ImageYrlPropsType } from 'yourails_common'
import { NavLinkProps } from 'react-router-dom'
export type AvatarPlusInfoComponentPropsType = {
  classProps?: Record<string, string | string[]>
  pathname?: string
  handleEvents: HandleEventType
  typeEvent?: string
  imgSrc?: string
  capture: string
  text: string
}

export type AvatarPlusInfoPropsType = Omit<
  AvatarPlusInfoComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type AvatarPlusInfoPropsOutType = {
  imageProps: ImageYrlPropsType
  navLinkProps: NavLinkProps
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoComponentType
  extends React.FunctionComponent<AvatarPlusInfoComponentPropsType> {
  (props: AvatarPlusInfoComponentPropsType): React.ReactElement
}

export type AvatarPlusInfoType = React.FunctionComponent<AvatarPlusInfoPropsType>
