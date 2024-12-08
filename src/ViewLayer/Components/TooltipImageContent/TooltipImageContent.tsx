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
  const { classAdded, tags, widthSizeWindow } = props

  const propsOut: TooltipImageContentPropsOutType = {
    iconTagsTooltipProps: {
      classAdded: 'Icon_TagsTooltip',
      icon: 'MdOutlineTag',
      isDisplaying: true,
    },
  }

  const contentPlateTooltipContentTags = (
    <div className='_contentPlateTooltipContentTags'>
      {!!tags?.length && tags.map((tag: string) => <div key={`tag-${tag}`}>{tag}</div>)}
    </div>
  )

  return (
    <div className={getClasses('TooltipImageContent', classAdded)}>
      {!!tags?.length && widthSizeWindow > 480 ? (
        <Tooltip className='_tooltip' title={contentPlateTooltipContentTags}>
          <div className='_tagsTooltip'>
            <div className='_cycle' />
            <IconYrl {...propsOut.iconTagsTooltipProps} />
          </div>
        </Tooltip>
      ) : null}
    </div>
  )
}

const TooltipImageContent: TooltipImageContentType = React.memo(TooltipImageContentComponent)

export type { TooltipImageContentPropsType, TooltipImageContentType }
export { TooltipImageContent }
