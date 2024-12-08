import React from 'react'
import { Tooltip } from 'antd'
import { IconYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  TooltipTagsComponentPropsType,
  TooltipTagsPropsType,
  TooltipTagsPropsOutType,
  TooltipTagsComponentType,
  TooltipTagsType,
} from './TooltipTagsTypes'

/**
 * @description Component to render TooltipTags
 * @import import { TooltipTags, TooltipTagsPropsType, TooltipTagsPropsOutType, TooltipTagsType } 
             from '../Components/TooltipTags/TooltipTags'
 */
const TooltipTagsComponent: TooltipTagsComponentType = (props: TooltipTagsComponentPropsType) => {
  const { classAdded, tags, widthSizeWindow } = props

  const propsOut: TooltipTagsPropsOutType = {
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
    <div className={getClasses('TooltipTags', classAdded)}>
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

const TooltipTags: TooltipTagsType = React.memo(TooltipTagsComponent)

export type { TooltipTagsPropsType, TooltipTagsType }
export { TooltipTags }
