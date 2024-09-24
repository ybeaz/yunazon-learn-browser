import React from 'react'
import {
  ArticleItemType,
  SummaryItemType,
  ObjectionType,
  ProfileType,
  ThumbnailsType,
} from '../../../@types/GraphqlTypes.d'
import { OrganizationType } from '../../../ContentMock/organizationsMock'
import { ThumbnailsStructuredPropsType } from '../ThumbnailsStructured/ThumbnailsStructured'
import { MetaContentServerPropsType } from '../MetaContentServer/MetaContentServer'
import { GenreType } from '../../../@types/GenreType'
import { EntitiyItemType } from '../TextStructured/TextStructured'
import { TextsPartsStructuredPropsType } from '../TextsPartsStructured/TextsPartsStructured'

export type TextArticleStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  entities: EntitiyItemType[] | EntitiyItemType[][]
  capture?: string
  description?: string
  tags?: string[]
  genre: GenreType
  language?: string
  pathBaseToIcons?: string
  dateCreated?: number
  dateUpdated?: number
  thumbnails?: ThumbnailsType
  creator?: ProfileType
  organization?: OrganizationType
  isSeo?: boolean
}

export type TextArticleStructuredPropsType = TextArticleStructuredComponentPropsType

export type TextArticleStructuredPropsOutType = {
  metaContentServerProps: MetaContentServerPropsType
  thumbnailsStructuredProps: ThumbnailsStructuredPropsType
  textsPartsStructuredProps: TextsPartsStructuredPropsType
}

/**
 * @import import { TextArticleStructuredComponentPropsType, TextArticleStructuredPropsType, TextArticleStructuredPropsOutType, TextArticleStructuredComponentType, TextArticleStructuredType } from './TextArticleStructuredTypes'
 */
export interface TextArticleStructuredComponentType
  extends React.FunctionComponent<TextArticleStructuredComponentPropsType> {
  (props: TextArticleStructuredComponentPropsType): React.ReactElement
}

export type TextArticleStructuredType = React.FunctionComponent<TextArticleStructuredPropsType>
