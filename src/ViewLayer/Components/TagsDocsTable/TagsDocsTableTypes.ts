import React from 'react'

import { NavLinkWithQueryPropsType } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { RootStoreType } from '../../../Interfaces/'
import { HandleEventType } from 'yourails_common'
import { IconYrlPropsType } from 'yourails_common'
import { PaginationNavigationPropsType } from '../../Components/'

export type TagsDocsTableComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  tagsCloud: RootStoreType['tagsCloud']
  pageTags: RootStoreType['componentsState']['pagination']['pageTags']
  handleEvents: HandleEventType
}

export type TagsDocsTableItemPropsOutType = {
  linkToAcademyMatrixTaggedProps: NavLinkWithQueryPropsType
  iconTagExpertiseProps: IconYrlPropsType
  iconTagMdCheckProps: IconYrlPropsType
  linkToDocumentProps: NavLinkWithQueryPropsType
}

export type TagsDocsTablePropsType = Omit<TagsDocsTableComponentPropsType, 'handleEvents'>

export type TagsDocsTablePropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { TagsDocsTableComponentPropsType, TagsDocsTablePropsType, TagsDocsTablePropsOutType, TagsDocsTableComponentType, TagsDocsTableType } from './TagsDocsTableTypes'
 */
export interface TagsDocsTableComponentType
  extends React.FunctionComponent<TagsDocsTableComponentPropsType> {
  (props: TagsDocsTableComponentPropsType): React.ReactElement
}

export type TagsDocsTableType = React.FunctionComponent<TagsDocsTablePropsType>
