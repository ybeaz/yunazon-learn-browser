import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
  ButtonYrl,
} from '../../ComponentsLibrary/'

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
  const { classAdded, summary, objections, isSummary, isObjections } = props

  console.info('TextStructuredColumns [28]', {
    isSummary,
    isObjections,
  })

  const propsOut2: TextStructuredColumnsPropsOut2Type = {
    buttonSummaryIsSummaryProps: {
      icon: '',
      classAdded: 'Button_summaryIsSummary',
      captureLeft: 'Toggle summary',
      action: {
        typeEvent: 'TOGGLE_IS_SUMMARY',
        data: { isSummary: !isSummary },
      },
      isDisplaying: true,
    },
    buttonSummaryIsObjectionsProps: {
      icon: '',
      captureLeft: 'Toggle objections',
      classAdded: 'Button_summaryIsObjections',
      action: {
        typeEvent: 'TOGGLE_IS_OBJECTIONS',
        data: { isObjections: !isObjections },
      },
      isDisplaying: true,
    },
  }

  const propsOut: TextStructuredColumnsPropsOutType = {
    summaryProps: {
      testsEntities: summary,
      title: 'Summary',
    },
    objectionsProps: {
      testsEntities: objections,
      title: 'Arguments & objections',
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
