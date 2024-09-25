import React from 'react'
import { PlayerPanelPropsType } from '../../Components/PlayerPanel/PlayerPanel'
import { LoaderBlurhashPropsType } from '../../Components/LoaderBlurhash'
import { TextStructuredColumnsPropsType } from '../../Components/TextStructuredColumns/TextStructuredColumns'
import { TextArticleStructuredPropsType } from '../TextArticleStructured/TextArticleStructured'

export type ContentSectionComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  CONTENT_ASSIGNED_COMPONENT: any
  contentAssignedComponentProps: Record<string, any>
  playerPanelProps: PlayerPanelPropsType
  loaderBlurhashProps: LoaderBlurhashPropsType
  textStructuredColumnsProps: TextStructuredColumnsPropsType
  storeStateSlice: any
}

export type ContentSectionPropsType = Omit<ContentSectionComponentPropsType, 'storeStateSlice'>

export type ContentSectionPropsOutType = {
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
