import React from 'react'

export type CreditsTableComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type CreditsTablePropsType = Omit<CreditsTableComponentPropsType, 'storeStateSlice'>

export type CreditsTablePropsOutType = Record<string, any>

/**
 * @import import { CreditsTableComponentPropsType, CreditsTablePropsType, CreditsTablePropsOutType, CreditsTableComponentType, CreditsTableType } from './CreditsTableTypes'
 */
export interface CreditsTableComponentType
  extends React.FunctionComponent<CreditsTableComponentPropsType> {
  (props: CreditsTableComponentPropsType): React.ReactElement
}

export type CreditsTableType = React.FunctionComponent<CreditsTablePropsType>
