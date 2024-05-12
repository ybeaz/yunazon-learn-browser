import React from 'react'
import { TagCloud } from 'react-tagcloud'

import { TagType } from '../../../@types'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
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
  } = props

  const tagsCloudNext = tagsCloud.map((tagCloud: TagType) => {
    const { completed, count, value } = tagCloud
    // console.info('TagsCloudBody [40]', { completed, count, value })
    const completedPercent = ((completed * 100) / count).toFixed()
    return { value: `${value} ${count}-${completed}-${completedPercent}%`, count }
  })

  console.info('TagsCloudBody [45]', { tagsCloud })

  const propsOut: TagsCloudBodyPropsOutType = {}

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      <div className='_tagCloudWrapper'>
        <TagCloud
          minSize={16}
          maxSize={48}
          shuffle={false}
          tags={tagsCloudNext}
          // renderer={customTagRenderer}
          onClick={(tag: any) => console.info('TagsCloudBody [67]', { tag })}
        />
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
