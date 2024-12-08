import React from 'react'
import { Tooltip } from 'antd'
import { IconYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  TooltipImageListComponentPropsType,
  TooltipImageListPropsType,
  TooltipImageListPropsOutType,
  TooltipImageListComponentType,
  TooltipImageListType,
} from './TooltipImageListTypes'

/**
 * @description Component to render TooltipImageList
 * @import import { TooltipImageList, TooltipImageListPropsType, TooltipImageListPropsOutType, TooltipImageListType } 
             from '../Components/TooltipImageList/TooltipImageList'
 */
const TooltipImageListComponent: TooltipImageListComponentType = (
  props: TooltipImageListComponentPropsType
) => {
  const { classAdded, tags, widthSizeWindow } = props

  const propsOut: TooltipImageListPropsOutType = {
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
    <div className={getClasses('TooltipImageList', classAdded)}>
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

const TooltipImageList: TooltipImageListType = React.memo(TooltipImageListComponent)

export type { TooltipImageListPropsType, TooltipImageListType }
export { TooltipImageList }
