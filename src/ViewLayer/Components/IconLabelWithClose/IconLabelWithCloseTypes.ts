import React from 'react'
import { ButtonYrlPropsType, IconYrlPropsType } from '../../ComponentsLibrary/'
import { ActionReduxType } from '../../../Interfaces/ActionReduxType'

export type IconLabelWithCloseComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  icon: string
  capture: string
  action: ActionReduxType
}

export type IconLabelWithClosePropsType = Omit<
  IconLabelWithCloseComponentPropsType,
  'storeStateSlice'
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
