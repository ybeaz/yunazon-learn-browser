import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
  ButtonYrl,
} from '../../ComponentsLibrary/'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { TextStructured } from '../../Components/TextStructured/TextStructured'
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
    isSummary,
    isObjections,
    language,
    titleSummary,
    titleObjections,
  } = props

  let buttonSummaryIsSummaryCaptureLeft = DICTIONARY.Show[language]
  if (isSummary) buttonSummaryIsSummaryCaptureLeft = DICTIONARY.Hide[language]

  let buttonSummaryIsObjectionsCaptureLeft = DICTIONARY.Show[language]
  if (isObjections)
    buttonSummaryIsObjectionsCaptureLeft = DICTIONARY.Hide[language]

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
    },
    objectionsProps: {
      entities: objections,
      capture: titleObjections,
    },
  }

  return (
    <div className={getClasses('TextStructuredColumns', classAdded)}>
      <div className='_buttonsWrapper'>
        <ButtonYrl {...propsOut2.buttonSummaryIsSummaryProps} />
        <ButtonYrl {...propsOut2.buttonSummaryIsObjectionsProps} />
      </div>
      <div className='_textStructuredWrapper'>
        {isSummary && summary && summary.length ? (
          <TextStructured {...propsOut.summaryProps} />
        ) : null}
        {isObjections && objections && objections.length ? (
          <TextStructured {...propsOut.objectionsProps} />
        ) : null}
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const TextStructuredColumns: TextStructuredColumnsType =
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(TextStructuredColumnsComponent)
  )

export type {
  TextStructuredColumnsPropsType,
  TextStructuredColumnsPropsOutType,
  TextStructuredColumnsComponentType,
  TextStructuredColumnsType,
}
