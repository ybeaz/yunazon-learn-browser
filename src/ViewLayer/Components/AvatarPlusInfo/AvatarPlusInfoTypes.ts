export enum TypeWrapperEnum {
  link = 'link',
  button = 'button',
}

export type AvatarPlusInfoPropsType = {
  classProps: Record<string, string | string[]>
  typeWrapper: TypeWrapperEnum
}

export type AvatarPlusInfoPropsOutType = Record<string, any>

/**
 * @import import { AvatarPlusInfoType } from './AvatarPlusInfoType'
 */
export interface AvatarPlusInfoComponentType
  extends React.FunctionComponent<AvatarPlusInfoPropsType> {
  (props: AvatarPlusInfoPropsType): React.ReactElement
}

export type AvatarPlusInfoType =
  React.FunctionComponent<AvatarPlusInfoPropsType>
