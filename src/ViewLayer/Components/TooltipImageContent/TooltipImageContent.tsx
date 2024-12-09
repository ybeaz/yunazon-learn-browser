import React from 'react'
import { Tooltip } from 'antd'
import { IconYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  TooltipImageContentComponentPropsType,
  TooltipImageContentPropsType,
  TooltipImageContentPropsOutType,
  TooltipImageContentComponentType,
  TooltipImageContentType,
} from './TooltipImageContentTypes'

/**
 * @description Component to render TooltipImageContent
 * @import import { TooltipImageContent, TooltipImageContentPropsType, TooltipImageContentPropsOutType, TooltipImageContentType } 
             from '../Components/TooltipImageContent/TooltipImageContent'
 */
const TooltipImageContentComponent: TooltipImageContentComponentType = (
  props: TooltipImageContentComponentPropsType
) => {
  const { classAdded, tooltipTitleContent, tooltipIconProps, isTooltip } = props

  return (
    <>
      {isTooltip ? (
        <div className={getClasses('TooltipImageContent', classAdded)}>
          <Tooltip className='_tooltip' title={tooltipTitleContent}>
            <div className='_cycleIconWrapper'>
              <div className='_cycle' />
              <IconYrl {...tooltipIconProps} />
            </div>
          </Tooltip>
        </div>
      ) : null}
    </>
  )
}

const TooltipImageContent: TooltipImageContentType = React.memo(TooltipImageContentComponent)

export type { TooltipImageContentPropsType, TooltipImageContentType }
export { TooltipImageContent }
