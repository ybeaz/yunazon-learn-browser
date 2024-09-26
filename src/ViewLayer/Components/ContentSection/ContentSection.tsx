import React from 'react'

import { withStoreStateSelectedYrl, ButtonYrl } from '../../ComponentsLibrary/'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { LoaderBlurhash } from '../../Components/LoaderBlurhash'
import { PlayerPanel } from '../../Components/PlayerPanel/PlayerPanel'
import { GenreEnumType } from '../../../@types/GenreType'
import { TextArticleStructured } from '../TextArticleStructured/TextArticleStructured'
import {
  getRearrangedArrayByIndex,
  GetRearrangedArrayByIndexParamsType,
} from '../../../Shared/getRearrangedArrayByIndex'
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

  const { summary, objections, article, language, titleSummary, titleObjections, titleArticle } =
    textStructuredComponentsProps

  const propsOut: ContentSectionPropsOutType = {
    buttonPlayerUpProps: {
      icon: '',
      classAdded: 'Button_playerUp',
      captureLeft: DICTIONARY.media[language],
      action: {
        typeEvent: 'TOGGLE_IS_SUMMARY',
        data: {},
      },
      isDisplaying: true,
    },
    buttonSummaryUpProps: {
      icon: '',
      classAdded: 'Button_summaryUp',
      captureLeft: DICTIONARY.summary[language],
      action: {
        typeEvent: 'TOGGLE_IS_SUMMARY',
        data: {},
      },
      isDisplaying: summary && summary.length ? true : false,
    },
    buttonArticleUpProps: {
      icon: '',
      classAdded: 'Button_articleUp',
      captureLeft: DICTIONARY.article[language],
      action: {
        typeEvent: 'TOGGLE_IS_SUMMARY',
        data: {},
      },
      isDisplaying: article && article.length ? true : false,
    },
    buttonObjectionsUpProps: {
      icon: '',
      captureLeft: DICTIONARY.objections[language],
      classAdded: 'Button_objectionsUp',
      action: {
        typeEvent: 'TOGGLE_IS_OBJECTIONS',
        data: {},
      },
      isDisplaying: objections && objections.length ? true : false,
    },
    CONTENT_ASSIGNED_COMPONENT,
    contentAssignedComponentProps,
    playerPanelProps,
    loaderBlurhashProps,
    articleProps: {
      entities: article,
      capture: titleArticle,
      genre: GenreEnumType['article'],
    },
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
  }

  const contentArray: any[] = [
    {
      typeIn: 'player',
      component: (
        <CONTENT_ASSIGNED_COMPONENT {...propsOut.contentAssignedComponentProps}>
          {null}
          <LoaderBlurhash {...propsOut.loaderBlurhashProps} />
          <PlayerPanel {...propsOut.playerPanelProps} />
        </CONTENT_ASSIGNED_COMPONENT>
      ),
    },
    {
      typeIn: 'summary',
      component: summary && summary.length && <TextArticleStructured {...propsOut.summaryProps} />,
    },
    {
      typeIn: 'article',
      component: article && article.length && <TextArticleStructured {...propsOut.articleProps} />,
    },
    {
      typeIn: 'objections',
      component: objections && objections.length && (
        <TextArticleStructured {...propsOut.objectionsProps} />
      ),
    },
  ]

  return (
    <div className={getClasses('ContentSection', classAdded)}>
      <div className='_buttonsWrapper'>
        <ButtonYrl {...propsOut.buttonPlayerUpProps} />
        <ButtonYrl {...propsOut.buttonArticleUpProps} />
        <ButtonYrl {...propsOut.buttonSummaryUpProps} />
        <ButtonYrl {...propsOut.buttonObjectionsUpProps} />
      </div>
      <div className='_contentWrapper'>
        {contentArray.map((ContentItem: any) => ContentItem.component)}
      </div>
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
