import React from 'react'

import { ThumbnailsImageDataType, ThumbnailsType } from '../../../@types/GraphqlTypes'

import {
  ThumbnailsStructuredComponentPropsType,
  ThumbnailsStructuredPropsType,
  ThumbnailsStructuredPropsOutType,
  ThumbnailsStructuredComponentType,
  ThumbnailsStructuredType,
} from './ThumbnailsStructuredTypes'

/**
 * @description Component to render ThumbnailsStructured
 * @import import { ThumbnailsStructured, ThumbnailsStructuredPropsType, ThumbnailsStructuredPropsOutType, ThumbnailsStructuredType } 
             from '../Components/ThumbnailsStructured/ThumbnailsStructured'
 */
const ThumbnailsStructuredComponent: ThumbnailsStructuredComponentType = (
  props: ThumbnailsStructuredComponentPropsType
) => {
  const { thumbnails, nameEntity, itemPropName } = props

  delete thumbnails['_id']
  const { favicon = '', ...thumbnailsRest } = thumbnails || { favicon: '' }
  const thumbnailsArray = (Object.values(thumbnailsRest || {}) as ThumbnailsImageDataType[]) || []
  const heightMax = Math.max(
    ...thumbnailsArray.map((thumbnail: ThumbnailsImageDataType) => thumbnail.height)
  )

  const thumbnailsImages = thumbnailsArray.map(
    (thumbnail: ThumbnailsImageDataType, index: number) => {
      const { height, rel = 'icon', type, url = '', width } = thumbnail
      const extension = (url || '').split('.').slice(-1)[0]
      let tag = (
        <div key={`key-${index}-${width}-${height}`}>
          <meta itemProp='image' content={url || ''} rel={rel || ''} />
          {/* <meta itemProp='thumbneil' content={url} rel={rel} /> */}
        </div>
      )

      if (heightMax === height)
        tag = (
          <div key={`key-${index}-${width}-${height}`}>
            <meta itemProp='image' content={url || ''} rel={rel || ''} />
            <img
              src={url || ''}
              loading='lazy'
              alt={`${nameEntity} thumbnail ${width}x${height}`}
              width={width}
              height={height}
              rel={rel || ''}
              itemProp={itemPropName}
            />
          </div>
        )
      return tag
    }
  )

  return <div>{thumbnailsImages}</div>
}

export const ThumbnailsStructured: ThumbnailsStructuredType = React.memo(
  ThumbnailsStructuredComponent
)

export type {
  ThumbnailsStructuredPropsType,
  ThumbnailsStructuredPropsOutType,
  ThumbnailsStructuredComponentType,
  ThumbnailsStructuredType,
}
