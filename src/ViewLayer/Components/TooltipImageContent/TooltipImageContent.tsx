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
  const { classAdded, tooltipTitleContent, isTooltip } = props

  const propsOut: TooltipImageContentPropsOutType = {
    iconTagsTooltipProps: {
      classAdded: 'Icon_TagsTooltip',
      icon: 'MdOutlineTag',
      isDisplaying: true,
    },
  }

  return (
    <>
      {isTooltip ? (
        <div className={getClasses('TooltipImageContent', classAdded)}>
          <Tooltip className='_tooltip' title={tooltipTitleContent}>
            <div className='_tagsTooltip'>
              <div className='_cycle' />
              <IconYrl {...propsOut.iconTagsTooltipProps} />
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
