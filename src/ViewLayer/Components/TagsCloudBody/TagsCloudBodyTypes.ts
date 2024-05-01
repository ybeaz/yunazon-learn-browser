import React from 'react'

export type TagsCloudBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type TagsCloudBodyPropsType = Omit<TagsCloudBodyComponentPropsType, 'storeStateSlice'>

export type TagsCloudBodyPropsOutType = Record<string, any>

/**
 * @import import { TagsCloudBodyComponentPropsType, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyComponentType, TagsCloudBodyType } from './TagsCloudBodyTypes'
 */
export interface TagsCloudBodyComponentType
  extends React.FunctionComponent<TagsCloudBodyComponentPropsType> {
  (props: TagsCloudBodyComponentPropsType): React.ReactElement
}

export type TagsCloudBodyType = React.FunctionComponent<TagsCloudBodyPropsType>
