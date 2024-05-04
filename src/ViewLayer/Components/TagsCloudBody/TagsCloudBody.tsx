import React from 'react'
import { TagCloud } from 'react-tagcloud'

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

const data = [
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'MongoDB', count: 18 },
  { value: 'CSS3', count: 20 },
]

/**
 * @description Component to render TagsCloudBody
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

  console.info('TagsCloudBody [35]', { tagsCloud })

  const propsOut: TagsCloudBodyPropsOutType = {}

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={tagsCloud}
        onClick={(tag: any) => alert(`'${tag.value}' was selected!`)}
      />
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
