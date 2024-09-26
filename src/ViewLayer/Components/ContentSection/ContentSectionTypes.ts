import React from 'react'
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

export type ContentSectionComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  CONTENT_ASSIGNED_COMPONENT: any
  contentAssignedComponentProps: Record<string, any>
  playerPanelProps: PlayerPanelPropsType
  loaderBlurhashProps: LoaderBlurhashPropsType
  textStructuredComponentsProps: TextStructuredComponentsPropsType
  storeStateSlice: any
}

export type ContentSectionPropsType = Omit<ContentSectionComponentPropsType, 'storeStateSlice'>

export type ContentSectionPropsOutType = {
  buttonPlayerUpProps: ButtonYrlPropsType
  buttonArticleUpProps: ButtonYrlPropsType
  buttonSummaryUpProps: ButtonYrlPropsType
  buttonObjectionsUpProps: ButtonYrlPropsType
  CONTENT_ASSIGNED_COMPONENT: any
  contentAssignedComponentProps: Record<string, any>
  playerPanelProps: PlayerPanelPropsType
  loaderBlurhashProps: LoaderBlurhashPropsType
  summaryProps: TextArticleStructuredPropsType
  objectionsProps: TextArticleStructuredPropsType
  articleProps: TextArticleStructuredPropsType
}

/**
 * @import import { ContentSectionComponentPropsType, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionComponentType, ContentSectionType } from './ContentSectionTypes'
 */
export interface ContentSectionComponentType
  extends React.FunctionComponent<ContentSectionComponentPropsType> {
  (props: ContentSectionComponentPropsType): React.ReactElement
}

export type ContentSectionType = React.FunctionComponent<ContentSectionPropsType>
