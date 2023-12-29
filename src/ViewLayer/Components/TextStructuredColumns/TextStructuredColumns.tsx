import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import { TextStructured } from '../../Components/TextStructured/TextStructured'
import {
  TextStructuredColumnsComponentPropsType,
  TextStructuredColumnsPropsType,
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
    summary,
    objections,
  })

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
      {isSummary && summary && summary.length ? (
        <TextStructured {...propsOut.summaryProps} />
      ) : null}
      {isObjections && objections && objections.length ? (
        <TextStructured {...propsOut.objectionsProps} />
      ) : null}
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
