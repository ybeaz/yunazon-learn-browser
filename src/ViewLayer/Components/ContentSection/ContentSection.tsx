import React, { Fragment } from 'react'
import { nanoid } from 'nanoid'
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

  return (
    <div className={getClasses('ContentSection', classAdded)}>
      <div className='_contentWrapper'>
        {contentArray.map((ContentItem: any, index: number) => (
          <Fragment key={`contentArray-${index}`}>{ContentItem.component}</Fragment>
        ))}
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
