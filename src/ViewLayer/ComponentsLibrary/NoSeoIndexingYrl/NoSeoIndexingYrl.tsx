import React from 'react'

import { getClasses } from '../../../Shared/getClasses'
import { withStoreStateSelectedYrl } from '../Hooks/withStoreStateSelectedYrl'

import {
  NoSeoIndexingYrlComponentPropsType,
  NoSeoIndexingYrlPropsType,
  NoSeoIndexingYrlPropsOutType,
  NoSeoIndexingYrlComponentType,
  NoSeoIndexingYrlType,
} from './NoSeoIndexingYrlTypes'

/**
 * @description Component to render NoSeoIndexingYrl
 * @import import { NoSeoIndexingYrl, NoSeoIndexingYrlPropsType, NoSeoIndexingYrlPropsOutType, NoSeoIndexingYrlType } 
             from '../ComponentsLibrary/'
 */
const NoSeoIndexingYrlComponent: NoSeoIndexingYrlComponentType = ({
  children,
}: NoSeoIndexingYrlComponentPropsType) => (
  <div className='NoSeoIndexingYrl' data-nosnippet>
    <div className='_hiddenTag'>{`<!--googleoff: all-->`}</div>
    <noindex>{children}</noindex>
    <div className='_hiddenTag'>{`<!--googleon: all-->`}</div>
  </div>
)

export const NoSeoIndexingYrl: NoSeoIndexingYrlType = NoSeoIndexingYrlComponent

export type {
  NoSeoIndexingYrlPropsType,
  NoSeoIndexingYrlPropsOutType,
  NoSeoIndexingYrlComponentType,
  NoSeoIndexingYrlType,
}
