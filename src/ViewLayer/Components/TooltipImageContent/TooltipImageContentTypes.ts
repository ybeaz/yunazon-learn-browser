import React from 'react'
export type RenderFunction = () => React.ReactNode
import { IconYrlPropsType } from 'yourails_common'

export type TooltipImageContentComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  tooltipTitleContent?: React.ReactNode | RenderFunction
  tooltipIconProps: IconYrlPropsType
  isTooltip: boolean
}

export type TooltipImageContentPropsType = Omit<
  TooltipImageContentComponentPropsType,
  'storeStateSlice'
>

export type TooltipImageContentPropsOutType = {}

/**
 * @import import { TooltipImageContentComponentPropsType, TooltipImageContentPropsType, TooltipImageContentPropsOutType, TooltipImageContentComponentType, TooltipImageContentType } from './TooltipImageContentTypes'
 */
export interface TooltipImageContentComponentType
  extends React.FunctionComponent<TooltipImageContentComponentPropsType> {
  (props: TooltipImageContentComponentPropsType): React.ReactElement
}

export type TooltipImageContentType = React.FunctionComponent<TooltipImageContentPropsType>
