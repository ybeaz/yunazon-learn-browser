import React from 'react'

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
  const { classAdded, storeStateSlice } = props

  const propsOut: SummaryPropsOutType = {}

  return <div className={getClasses('Summary', classAdded)}>Summary</div>
}

const storeStateSliceProps: string[] = []
export const Summary = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(SummaryComponent)
)

export type {
  SummaryPropsType,
  SummaryPropsOutType,
  SummaryComponentType,
  SummaryType,
}
