import React from 'react'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { PaginationNavigationPropsType } from '../../Components/'

import { PaginationNameEnumType } from '../../../Interfaces/'

export type TagsCloudBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    tagsCloud: RootStoreType['tagsCloud']
  }
}

export type TagsCloudBodyPropsType = Omit<TagsCloudBodyComponentPropsType, 'storeStateSlice'>

export type TagsCloudBodyPropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { TagsCloudBodyComponentPropsType, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyComponentType, TagsCloudBodyType } from './TagsCloudBodyTypes'
 */
export interface TagsCloudBodyComponentType
  extends React.FunctionComponent<TagsCloudBodyComponentPropsType> {
  (props: TagsCloudBodyComponentPropsType): React.ReactElement
}

export type TagsCloudBodyType = React.FunctionComponent<TagsCloudBodyPropsType>
