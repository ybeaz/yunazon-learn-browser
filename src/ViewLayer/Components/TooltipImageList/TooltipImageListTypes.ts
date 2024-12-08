import React from 'react'

import { IconYrlPropsType } from 'yourails_common'

export type TooltipImageListComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  widthSizeWindow: number
  tags: string[]
}

export type TooltipImageListPropsType = Omit<TooltipImageListComponentPropsType, 'storeStateSlice'>

export type TooltipImageListPropsOutType = {
  iconTagsTooltipProps: IconYrlPropsType
}

/**
 * @import import { TooltipImageListComponentPropsType, TooltipImageListPropsType, TooltipImageListPropsOutType, TooltipImageListComponentType, TooltipImageListType } from './TooltipImageListTypes'
 */
export interface TooltipImageListComponentType
  extends React.FunctionComponent<TooltipImageListComponentPropsType> {
  (props: TooltipImageListComponentPropsType): React.ReactElement
}

export type TooltipImageListType = React.FunctionComponent<TooltipImageListPropsType>
