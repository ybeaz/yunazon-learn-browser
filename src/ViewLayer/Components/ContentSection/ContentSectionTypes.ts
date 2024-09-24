import React from 'react'

export type ContentSectionComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type ContentSectionPropsType = Omit<ContentSectionComponentPropsType, 'storeStateSlice'>

export type ContentSectionPropsOutType = Record<string, any>

/**
 * @import import { ContentSectionComponentPropsType, ContentSectionPropsType, ContentSectionPropsOutType, ContentSectionComponentType, ContentSectionType } from './ContentSectionTypes'
 */
export interface ContentSectionComponentType
  extends React.FunctionComponent<ContentSectionComponentPropsType> {
  (props: ContentSectionComponentPropsType): React.ReactElement
}

export type ContentSectionType = React.FunctionComponent<ContentSectionPropsType>
