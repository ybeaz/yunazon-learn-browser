import React from 'react'

import { IconYrlPropsType } from 'yourails_common'

export type TooltipImageContentComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  widthSizeWindow: number
  tags: string[]
}

export type TooltipImageContentPropsType = Omit<
  TooltipImageContentComponentPropsType,
  'storeStateSlice'
>

export type TooltipImageContentPropsOutType = {
  iconTagsTooltipProps: IconYrlPropsType
}

/**
 * @import import { TooltipImageContentComponentPropsType, TooltipImageContentPropsType, TooltipImageContentPropsOutType, TooltipImageContentComponentType, TooltipImageContentType } from './TooltipImageContentTypes'
 */
export interface TooltipImageContentComponentType
  extends React.FunctionComponent<TooltipImageContentComponentPropsType> {
  (props: TooltipImageContentComponentPropsType): React.ReactElement
}

export type TooltipImageContentType = React.FunctionComponent<TooltipImageContentPropsType>
