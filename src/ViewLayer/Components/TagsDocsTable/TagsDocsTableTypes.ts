import React from 'react'
import { NavLinkProps } from 'react-router-dom'

import { RootStoreType, HandleEventType } from '../../../Interfaces/'
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
  linkToAcademyMatrixTaggedProps: NavLinkProps
  iconTagExpertiseProps: IconYrlPropsType
  iconTagMdCheckProps: IconYrlPropsType
  linkToDocumentProps: NavLinkProps
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
