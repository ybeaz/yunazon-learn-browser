import React from 'react'
import { ButtonYrlPropsType, IconYrlPropsType } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type IconLabelWithCloseComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  icon: string
  capture: string
  action: ActionReduxType
  handleEvents: HandleEventType
}

export type IconLabelWithClosePropsType = Omit<
  IconLabelWithCloseComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type IconLabelWithClosePropsOutType = {
  iconLabelProps: IconYrlPropsType
  buttonCloseProps: ButtonYrlPropsType
}

/**
 * @import import { IconLabelWithCloseComponentPropsType, IconLabelWithClosePropsType, IconLabelWithClosePropsOutType, IconLabelWithCloseComponentType, IconLabelWithCloseType } from './IconLabelWithCloseTypes'
 */
export interface IconLabelWithCloseComponentType
  extends React.FunctionComponent<IconLabelWithCloseComponentPropsType> {
  (props: IconLabelWithCloseComponentPropsType): React.ReactElement
}

export type IconLabelWithCloseType = React.FunctionComponent<IconLabelWithClosePropsType>
