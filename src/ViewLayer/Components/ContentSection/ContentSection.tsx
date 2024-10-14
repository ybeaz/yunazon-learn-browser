import React from 'react'

import { withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  ContentArrayItemType,
  TextStructuredComponentsPropsType,
  ContentSectionComponentPropsType,
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
} from './ContentSectionTypes'

/**
 * @description Component to render ContentSection
 * @import import { TextStructuredComponentsPropsType, ContentSection, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionType } 
             from '../Components/ContentSection/ContentSection'
 */
const ContentSectionComponent: ContentSectionComponentType = (
  props: ContentSectionComponentPropsType
) => {
  const { classAdded, contentArray } = props

  const propsOut: ContentSectionPropsOutType = {}

  return (
    <div className={getClasses('ContentSection', classAdded)}>
      <div className='_contentWrapper'>
        {contentArray.map((ContentItem: any) => ContentItem.component)}
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const ContentSection: ContentSectionType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ContentSectionComponent)
)

export type {
  ContentArrayItemType,
  TextStructuredComponentsPropsType,
  ContentSectionPropsType,
  ContentSectionPropsOutType,
  ContentSectionComponentType,
  ContentSectionType,
}
