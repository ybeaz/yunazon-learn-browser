import React from 'react'
import {
  SummaryItemType,
  ObjectionType,
  ProfileType,
  ThumbnailsType,
} from '../../../@types/GraphqlTypes.d'
import { OrganizationType } from '../../../ContentMock/organizationsMock'
import { SectionType } from '../../../@types/ArticleMockType'
import { ThumbnailsStructuredPropsType } from '../ThumbnailsStructured/ThumbnailsStructured'
import { MetaContentServerPropsType } from '../MetaContentServer/MetaContentServer'

export type EntitiyItemType = {
  capture?:
    | SummaryItemType['capture']
    | ObjectionType['capture']
    | SectionType['capture']
  text?: SummaryItemType['text'] | ObjectionType['text']
  divs?: SectionType['divs']
  options?: SectionType['options']
}

export type TextStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  entities: EntitiyItemType[]
  capture?: string
  description?: string
  tags?: string[]
  genre: 'article' | 'summary' | 'objections'
  language: string
  pathBaseToIcons?: string
  dateCreated?: number
  dateUpdated?: number
  thumbnails: ThumbnailsType
  creator?: ProfileType
  organization?: OrganizationType
  isSeo?: boolean
}

export type TextStructuredPropsType = TextStructuredComponentPropsType

export type TextStructuredPropsOutType = {
  metaContentServerProps: MetaContentServerPropsType
  thumbnailsStructuredProps: ThumbnailsStructuredPropsType
}

/**
 * @import import { TextStructuredComponentPropsType, TextStructuredPropsType, TextStructuredPropsOutType, TextStructuredComponentType, TextStructuredType } from './TextStructuredTypes'
 */
export interface TextStructuredComponentType
  extends React.FunctionComponent<TextStructuredComponentPropsType> {
  (props: TextStructuredComponentPropsType): React.ReactElement
}

export type TextStructuredType =
  React.FunctionComponent<TextStructuredPropsType>
