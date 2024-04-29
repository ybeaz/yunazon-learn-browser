import React from 'react'

export type TagsCloudComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type TagsCloudPropsType = Omit<TagsCloudComponentPropsType, 'storeStateSlice'>

export type TagsCloudPropsOutType = Record<string, any>

/**
 * @import import { TagsCloudComponentPropsType, TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudComponentType, TagsCloudType } from './TagsCloudTypes'
 */
export interface TagsCloudComponentType
  extends React.FunctionComponent<TagsCloudComponentPropsType> {
  (props: TagsCloudComponentPropsType): React.ReactElement
}

export type TagsCloudType = React.FunctionComponent<TagsCloudPropsType>
