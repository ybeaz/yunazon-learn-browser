import React, { ReactElement, JSXElementConstructor } from 'react'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { TextArticleStructuredPropsType } from '../TextArticleStructured/TextArticleStructured'
import { SummaryItemType, ObjectionType, ArticleItemType } from '../../../@types/GraphqlTypes.d'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type TextStructuredComponentsPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  article: ArticleItemType[][]
  summary: SummaryItemType[]
  objections: ObjectionType[]
  isSummaryButton: boolean
  isObjectionsButton: boolean
  language: RootStoreType['language']
  titleSummary: string
  titleObjections: string
  titleArticle: string
}

export type ContentArrayItemType = {
  typeIn: string
  component: 0 | Element | React.JSX.Element
}

export type ContentSectionComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  contentArray: ContentArrayItemType[]
}

export type ContentSectionPropsType = Omit<ContentSectionComponentPropsType, 'storeStateSlice'>

export type ContentSectionPropsOutType = {}

/**
 * @import import { ContentSectionComponentPropsType, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionComponentType, ContentSectionType } from './ContentSectionTypes'
 */
export interface ContentSectionComponentType
  extends React.FunctionComponent<ContentSectionComponentPropsType> {
  (props: ContentSectionComponentPropsType): React.ReactElement
}

export type ContentSectionType = React.FunctionComponent<ContentSectionPropsType>
