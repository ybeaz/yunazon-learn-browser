import React from 'react'
import { useNavigate } from 'react-router-dom'

import { TagCloud } from 'react-tagcloud'
import { PaginationNameEnumType } from '../../../Interfaces/'
import { TagType } from '../../../@types'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import {
  TagsCloudBodyComponentPropsType,
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
} from './TagsCloudBodyTypes'

const customTagRenderer = (tag: any, size: number, color: string) => {
  return (
    <span key={tag.value} style={{ color }} className={`tag-${size}`}>
      {tag.value}
    </span>
  )
}

/**
 * @description Component to render TagsCloudBody
 * @link https://www.npmjs.com/package/react-tagcloud
 * @import import { TagsCloudBody, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyType } 
             from '../Components/TagsCloudBody/TagsCloudBody'
 */
const TagsCloudBodyComponent: TagsCloudBodyComponentType = (
  props: TagsCloudBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { tagsCloud },
    handleEvents,
  } = props

  const navigate = useNavigate()

  const tagsCloudNext = tagsCloud.map((tagCloud: TagType) => {
    const { completed, count, value } = tagCloud
    const completedPercent = ((completed * 100) / count).toFixed()
    return { value: `${value}: ${count} ${completed} ${completedPercent}%`, count }
  })

  const propsOut: TagsCloudBodyPropsOutType = {
    paginationNavigationProps: { paginationName: PaginationNameEnumType['pageTags'] },
  }

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      <div className='_tagCloudWrapper'>
        <TagCloud
          minSize={16}
          maxSize={32}
          shuffle={false}
          tags={tagsCloudNext}
          // renderer={customTagRenderer}
          onClick={(tag: any) =>
            handleEvents({}, { type: 'CLICK_ON_TAG', data: { tag, navigate } })
          }
        />
      </div>
      <div className='_paginationNavigationWrapper'>
        <PaginationNavigation {...propsOut.paginationNavigationProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['tagsCloud']
export const TagsCloudBody: TagsCloudBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudBodyComponent))
)

export type {
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
}
