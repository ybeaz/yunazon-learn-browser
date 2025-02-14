import { ReactElement, JSXElementConstructor } from 'react'

import { HandleEventType } from 'yourails_common'
import { ImageYrlPropsType } from 'yourails_common'
import { NavLinkWithQueryPropsType } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'

export type AvatarPlusInfoComponentPropsType = {
  classProps?: Record<string, string | string[]>
  pathname?: string
  handleEvents: HandleEventType
  typeEvent?: string
  imgSrc?: string
  capture: string
  text: ReactElement<any, string | JSXElementConstructor<any>> | string
  isTitle?: boolean
}

export type AvatarPlusInfoPropsType = Omit<
  AvatarPlusInfoComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type AvatarPlusInfoPropsOutType = {
  imageProps: ImageYrlPropsType
  navLinkProps: NavLinkWithQueryPropsType
}

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoComponentType
  extends React.FunctionComponent<AvatarPlusInfoComponentPropsType> {
  (props: AvatarPlusInfoComponentPropsType): React.ReactElement
}

export type AvatarPlusInfoType = React.FunctionComponent<AvatarPlusInfoPropsType>
