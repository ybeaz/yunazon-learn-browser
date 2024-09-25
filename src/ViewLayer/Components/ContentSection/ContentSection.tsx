import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import { GenreEnumType } from '../../../@types/GenreType'
import { TextArticleStructured } from '../TextArticleStructured/TextArticleStructured'
import {
  TextStructuredComponentsPropsType,
  ContentSectionComponentPropsType,
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
} from './ContentSectionTypes'

/**
 * @description Component to render ContentSection
 * @import import { TextStructuredComponentsPropsType, ContentSection, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionType } 
             from '../Components/ContentSection/ContentSection'
 */
const ContentSectionComponent: ContentSectionComponentType = (
  props: ContentSectionComponentPropsType
) => {
  const {
    classAdded,
    CONTENT_ASSIGNED_COMPONENT,
    contentAssignedComponentProps,
    playerPanelProps,
    loaderBlurhashProps,
    textStructuredComponentsProps,
  } = props

  const {
    summary,
    objections,
    article,
    isSummaryButton,
    isObjectionsButton,
    language,
    titleSummary,
    titleObjections,
    titleArticle,
  } = textStructuredComponentsProps

  const propsOut: ContentSectionPropsOutType = {
    CONTENT_ASSIGNED_COMPONENT,
    contentAssignedComponentProps,
    playerPanelProps,
    loaderBlurhashProps,
    summaryProps: {
      entities: summary,
      capture: titleSummary,
      genre: GenreEnumType['summary'],
    },
    objectionsProps: {
      entities: objections,
      capture: titleObjections,
      genre: GenreEnumType['objections'],
    },
    articleProps: {
      entities: article,
      capture: titleArticle,
      genre: GenreEnumType['article'],
    },
  }

  return (
    <div className={getClasses('ContentSection', classAdded)}>
      <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentAssignedComponentProps}>
        {null}
        <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
        <PlayerPanel {...propsOut.playerPanelProps} />
      </CONTENT_ASSIGNED_COMPONENT>
      {summary && summary.length && <TextArticleStructured {...propsOut.summaryProps} />}
      {objections && objections.length && <TextArticleStructured {...propsOut.objectionsProps} />}
      {article && article.length && <TextArticleStructured {...propsOut.articleProps} />}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const ContentSection: ContentSectionType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ContentSectionComponent)
)

export type {
  TextStructuredComponentsPropsType,
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
}
