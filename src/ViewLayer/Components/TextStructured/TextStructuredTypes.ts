import React from 'react'
import { ArticleItemType, SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import { ThumbnailsStructuredPropsType } from '../ThumbnailsStructured/ThumbnailsStructured'
import { MetaContentServerPropsType } from '../MetaContentServer/MetaContentServer'

export type EntitiyItemType = {
  articleItemID?: ArticleItemType['articleItemID']
  capture?: SummaryItemType['capture'] | ObjectionType['capture'] | ArticleItemType['capture']
  text?: SummaryItemType['text'] | ObjectionType['text']
  divs?: ArticleItemType['divs']
  options?: ArticleItemType['options']
}

export type TextStructuredComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  entities: EntitiyItemType[]
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

export type TextStructuredType = React.FunctionComponent<TextStructuredPropsType>
