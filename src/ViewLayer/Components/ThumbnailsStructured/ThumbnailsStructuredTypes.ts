import React from 'react'

import { ThumbnailsType } from '../../../@types/GraphqlTypes'

export type ThumbnailsStructuredComponentPropsType = {
  thumbnails: ThumbnailsType & { _id?: any }
  nameEntity: string
  itemPropName: string
}

export type ThumbnailsStructuredPropsType = Omit<
  ThumbnailsStructuredComponentPropsType,
  'storeStateSlice'
>

export type ThumbnailsStructuredPropsOutType = Record<string, any>

/**
 * @import import { ThumbnailsStructuredComponentPropsType, ThumbnailsStructuredPropsType, ThumbnailsStructuredPropsOutType, ThumbnailsStructuredComponentType, ThumbnailsStructuredType } from './ThumbnailsStructuredTypes'
 */
export interface ThumbnailsStructuredComponentType
  extends React.FunctionComponent<ThumbnailsStructuredComponentPropsType> {
  (props: ThumbnailsStructuredComponentPropsType): React.ReactElement
}

export type ThumbnailsStructuredType =
  React.FunctionComponent<ThumbnailsStructuredPropsType>
