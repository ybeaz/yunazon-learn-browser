import React from 'react'

export type SummaryComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type SummaryPropsType = Omit<
  SummaryComponentPropsType,
  'storeStateSlice'
>

export type SummaryPropsOutType = Record<string, any>

/**
 * @import import { SummaryComponentPropsType, SummaryPropsType, SummaryPropsOutType, SummaryComponentType, SummaryType } from './SummaryTypes'
 */
export interface SummaryComponentType
  extends React.FunctionComponent<SummaryComponentPropsType> {
  (props: SummaryComponentPropsType): React.ReactElement
}

export type SummaryType = React.FunctionComponent<SummaryPropsType>
