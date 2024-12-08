import React from 'react'

import { IconYrlPropsType } from 'yourails_common'

export type TooltipTagsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  widthSizeWindow: number
  tags: string[]
}

export type TooltipTagsPropsType = Omit<TooltipTagsComponentPropsType, 'storeStateSlice'>

export type TooltipTagsPropsOutType = {
  iconTagsTooltipProps: IconYrlPropsType
}

/**
 * @import import { TooltipTagsComponentPropsType, TooltipTagsPropsType, TooltipTagsPropsOutType, TooltipTagsComponentType, TooltipTagsType } from './TooltipTagsTypes'
 */
export interface TooltipTagsComponentType
  extends React.FunctionComponent<TooltipTagsComponentPropsType> {
  (props: TooltipTagsComponentPropsType): React.ReactElement
}

export type TooltipTagsType = React.FunctionComponent<TooltipTagsPropsType>
