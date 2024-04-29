import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  TagsCloudComponentPropsType,
  TagsCloudPropsType,
  TagsCloudPropsOutType,
  TagsCloudComponentType,
  TagsCloudType,
} from './TagsCloudTypes'

/**
 * @description Component to render TagsCloud
 * @import import { TagsCloud, TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudType } 
             from '../Components/TagsCloud/TagsCloud'
 */
const TagsCloudComponent: TagsCloudComponentType = (props: TagsCloudComponentPropsType) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: TagsCloudPropsOutType = {}

  return <div className={getClasses('TagsCloud', classAdded)}>TagsCloud</div>
}

const storeStateSliceProps: string[] = []
export const TagsCloud: TagsCloudType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(TagsCloudComponent)
)

export type { TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudComponentType, TagsCloudType }
