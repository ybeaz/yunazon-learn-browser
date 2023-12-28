import React, { ReactElement } from 'react'

import { SummaryItemType } from '../../../@types/GraphqlTypes.d'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  SummaryComponentPropsType,
  SummaryPropsType,
  SummaryPropsOutType,
  SummaryComponentType,
  SummaryType,
} from './SummaryTypes'

/**
 * @description Component to render Summary
 * @import import { Summary, SummaryPropsType, SummaryPropsOutType, SummaryType } 
             from '../Components/Summary/Summary'
 */
const SummaryComponent: SummaryComponentType = (
  props: SummaryComponentPropsType
) => {
  const { classAdded, storeStateSlice, summary } = props

  console.info('Summary [27]', { summary })

  const getSummaryCaptureText = (
    summaryIn: SummaryItemType[]
  ): ReactElement[] => {
    return summaryIn.map((summaryItem: SummaryItemType) => {
      const { capture, text } = summaryItem

      return (
        <div className='_captureTextWrapper'>
          <h3 className='_capture'>{capture}</h3>
          <div className='_text'>{text}</div>
        </div>
      )
    })
  }

  const propsOut: SummaryPropsOutType = {}

  return (
    <div className={getClasses('Summary', classAdded)}>
      <h2 className='_h2'>Summary</h2>
      {getSummaryCaptureText(summary)}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const Summary: SummaryType = React.memo(
  withStoreStateSelectedYrl(storeStateSliceProps, SummaryComponent)
)

export type {
  SummaryPropsType,
  SummaryPropsOutType,
  SummaryComponentType,
  SummaryType,
}
