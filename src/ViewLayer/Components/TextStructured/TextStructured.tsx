import React, { ReactElement } from 'react'

import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  TextStructuredComponentPropsType,
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
} from './TextStructuredTypes'

/**
 * @description Component to render TextStructured
 * @import import { TextStructured, TextStructuredPropsType, TextStructuredPropsOutType, TextStructuredType } 
             from '../Components/TextStructured/TextStructured'
 */
const TextStructuredComponent: TextStructuredComponentType = (
  props: TextStructuredComponentPropsType
) => {
  const { classAdded, storeStateSlice, summary } = props

  console.info('TextStructured [27]', { summary })

  const getTextStructured = (
    arrayIn: (SummaryItemType | ObjectionType)[]
  ): ReactElement[] => {
    return arrayIn.map((summaryItem: SummaryItemType | ObjectionType) => {
      const { capture, text } = summaryItem

      return (
        <div className='_captureTextWrapper'>
          <h3 className='_capture'>{capture}</h3>
          <div className='_text'>{text}</div>
        </div>
      )
    })
  }

  const propsOut: TextStructuredPropsOutType = {}

  return (
    <div className={getClasses('TextStructured', classAdded)}>
      <h2 className='_h2'>TextStructured</h2>
      {getTextStructured(summary)}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const TextStructured: TextStructuredType = React.memo(
  withStoreStateSelectedYrl(storeStateSliceProps, TextStructuredComponent)
)

export type {
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
}
