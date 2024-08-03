import React from 'react'

import { withPropsYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  CreditsTableComponentPropsType,
  CreditsTablePropsType,
  CreditsTablePropsOutType,
  CreditsTableComponentType,
  CreditsTableType,
} from './CreditsTableTypes'

/**
 * @description Component to render CreditsTable
 * @import import { CreditsTable, CreditsTablePropsType, CreditsTablePropsOutType, CreditsTableType } 
             from '../Components/CreditsTable/CreditsTable'
 */
const CreditsTableComponent: CreditsTableComponentType = (
  props: CreditsTableComponentPropsType
) => {
  const { classAdded } = props

  const propsOut: CreditsTablePropsOutType = {}

  return <div className={getClasses('CreditsTable', classAdded)}>CreditsTable</div>
}

const storeStateSliceProps: string[] = []
export const CreditsTable: CreditsTableType = React.memo(CreditsTableComponent)

export type {
  CreditsTablePropsType,
  CreditsTablePropsOutType,
  CreditsTableComponentType,
  CreditsTableType,
}
