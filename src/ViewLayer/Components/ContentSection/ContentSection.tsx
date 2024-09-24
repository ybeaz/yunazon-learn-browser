import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  ContentSectionComponentPropsType,
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
} from './ContentSectionTypes'

/**
 * @description Component to render ContentSection
 * @import import { ContentSection, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionType } 
             from '../Components/ContentSection/ContentSection'
 */
const ContentSectionComponent: ContentSectionComponentType = (
  props: ContentSectionComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: ContentSectionPropsOutType = {}

  return <div className={getClasses('ContentSection', classAdded)}>ContentSection</div>
}

const storeStateSliceProps: string[] = []
export const ContentSection: ContentSectionType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ContentSectionComponent)
)

export type {
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
}
