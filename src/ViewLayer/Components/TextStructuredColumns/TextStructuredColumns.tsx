import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl, ButtonYrl } from '../../ComponentsLibrary/'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import {
  TextArticleStructured,
  TextArticleStructuredPropsType,
  TextArticleStructuredPropsOutType,
  TextArticleStructuredType,
} from '../TextArticleStructured/TextArticleStructured'
import { GenreEnumType } from '../../../@types/GenreType'
import {
  TextStructuredColumnsComponentPropsType,
  TextStructuredColumnsPropsType,
  TextStructuredColumnsPropsOut2Type,
  TextStructuredColumnsPropsOutType,
  TextStructuredColumnsComponentType,
  TextStructuredColumnsType,
} from './TextStructuredColumnsTypes'

/**
 * @description Component to render TextStructuredColumns
 * @import import { TextStructuredColumns, TextStructuredColumnsPropsType, TextStructuredColumnsPropsOutType, TextStructuredColumnsType } 
             from '../Components/TextStructuredColumns/TextStructuredColumns'
 */
const TextStructuredColumnsComponent: TextStructuredColumnsComponentType = (
  props: TextStructuredColumnsComponentPropsType
) => {
  const {
    classAdded,
    summary,
    objections,
    article,
    isSummaryButton,
    isSummary,
    isObjectionsButton,
    isObjections,
    language,
    titleSummary,
    titleObjections,
    titleArticle,
  } = props

  let buttonSummaryIsSummaryCaptureLeft = DICTIONARY.Show[language]
  if (isSummary) buttonSummaryIsSummaryCaptureLeft = DICTIONARY.Hide[language]

  let buttonSummaryIsObjectionsCaptureLeft = DICTIONARY.Show[language]
  if (isObjections) buttonSummaryIsObjectionsCaptureLeft = DICTIONARY.Hide[language]

  const propsOut2: TextStructuredColumnsPropsOut2Type = {
    buttonSummaryIsSummaryProps: {
      icon: '',
      classAdded: 'Button_summaryIsSummary',
      captureLeft: `${buttonSummaryIsSummaryCaptureLeft} ${DICTIONARY.summary[language]}`,
      action: {
        typeEvent: 'TOGGLE_IS_SUMMARY',
        data: { isSummary: !isSummary },
      },
      isDisplaying: summary && summary.length ? true : false,
    },
    buttonSummaryIsObjectionsProps: {
      icon: '',
      captureLeft: `${buttonSummaryIsObjectionsCaptureLeft} ${DICTIONARY.objections[language]}`,
      classAdded: 'Button_summaryIsObjections',
      action: {
        typeEvent: 'TOGGLE_IS_OBJECTIONS',
        data: { isObjections: !isObjections },
      },
      isDisplaying: objections && objections.length ? true : false,
    },
  }

  const propsOut: TextStructuredColumnsPropsOutType = {
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
      entities: (Array.isArray(article) && article.length && article[0]) || [],
      capture: titleArticle,
      genre: GenreEnumType['article'],
    },
  }

  return (
    <div className={getClasses('TextStructuredColumns', classAdded)}>
      <div className='_buttonsWrapper'>
        {isSummaryButton ? <ButtonYrl {...propsOut2.buttonSummaryIsSummaryProps} /> : null}
        {isObjectionsButton ? <ButtonYrl {...propsOut2.buttonSummaryIsObjectionsProps} /> : null}
      </div>
      <div className='_textStructuredWrapper'>
        {isSummary && summary && summary.length ? (
          <TextArticleStructured {...propsOut.summaryProps} />
        ) : null}
        {isObjections && objections && objections.length ? (
          <TextArticleStructured {...propsOut.objectionsProps} />
        ) : null}
        {article && article.length ? <TextArticleStructured {...propsOut.articleProps} /> : null}
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const TextStructuredColumns: TextStructuredColumnsType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(TextStructuredColumnsComponent)
)

export type {
  TextStructuredColumnsPropsType,
  TextStructuredColumnsPropsOutType,
  TextStructuredColumnsComponentType,
  TextStructuredColumnsType,
}
