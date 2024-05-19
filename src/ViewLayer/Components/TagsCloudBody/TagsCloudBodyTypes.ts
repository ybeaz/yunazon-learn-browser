import React from 'react'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { PaginationNavigationPropsType } from '../../Components/'
import { HandleEventType } from '../../../Interfaces/HandleEventType'
import { ButtonYrlPropsType, InputGroupYrlPropsType } from '../../ComponentsLibrary/'
import { PaginationType } from '../../../Interfaces/'

export type TagsCloudBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    tagsCloud: RootStoreType['tagsCloud']
    language: RootStoreType['language']
    screenActive: RootStoreType['componentsState']['screenActive']
    pageTags: PaginationType
  }
  handleEvents: HandleEventType
}

export type TagsCloudBodyPropsType = Omit<
  TagsCloudBodyComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type GetTagsCloudListType = {
  buttonTagMdCheckProps: ButtonYrlPropsType
  buttonTagExpertiseProps: ButtonYrlPropsType
}

export type TagsCloudBodyPropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
  inputGroupProps: InputGroupYrlPropsType
}

/**
 * @import import { TagsCloudBodyComponentPropsType, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyComponentType, TagsCloudBodyType } from './TagsCloudBodyTypes'
 */
export interface TagsCloudBodyComponentType
  extends React.FunctionComponent<TagsCloudBodyComponentPropsType> {
  (props: TagsCloudBodyComponentPropsType): React.ReactElement
}

export type TagsCloudBodyType = React.FunctionComponent<TagsCloudBodyPropsType>
