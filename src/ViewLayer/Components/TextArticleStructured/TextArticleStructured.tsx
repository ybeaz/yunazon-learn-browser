import React from 'react'

import { getClasses } from '../../../Shared/getClasses'
import { getCapitalizedFirstCharWords } from '../../../Shared/getCapitalizedFirstCharWords'
import { ThumbnailsStructured } from '../ThumbnailsStructured/ThumbnailsStructured'
import { MetaContentServer } from '../MetaContentServer/MetaContentServer'
import { TextsPartsStructured } from '../TextsPartsStructured/TextsPartsStructured'
import { withConditionalWrapperYrl, NoSeoIndexingYrl } from 'yourails_view_layer_web'
import {
  TextArticleStructuredComponentPropsType,
  TextArticleStructuredPropsType,
  TextArticleStructuredPropsOutType,
  TextArticleStructuredComponentType,
  TextArticleStructuredType,
} from './TextArticleStructuredTypes'

const propsDefault: any = {
  creator: {
    affiliation: '',
    jobTitle: '',
    nameFirst: '',
    nameMiddle: '',
    nameLast: '',
  },
  organization: {
    name: '',
    brand: '',
    description: '',
    language: '',
    email: '',
    url: '',
    thumbnails: {},
  },
}

/**
 * @description Component to render TextArticleStructured
 * @link Schema:Article https://schema.org/Article
 * @link Schems:ItemList http://schema.org/ItemList
 * @link Schema.org CreativeWork https://schema.org/CreativeWork
 * @link Microdata https://html.spec.whatwg.org/multipage/microdata.html
 * @link Microformats https://microformats.org/wiki/Main_Page
 * @import import { TextArticleStructured, TextArticleStructuredPropsType, TextArticleStructuredPropsOutType, TextArticleStructuredType } 
             from '../Components/TextArticleStructured/TextArticleStructured'
 */
const TextArticleStructuredComponent: TextArticleStructuredComponentType = (
  props: TextArticleStructuredComponentPropsType
) => {
  const {
    classAdded,
    entities,
    capture,
    tags = [],
    genre,
    language,
    dateCreated: dateCreatedIn,
    dateUpdated,
    thumbnails = {},
    creator = propsDefault.creator,
    organization = propsDefault.organization,
    isSeo = false,
    isNoSeoIndexing = false,
  } = props

  const dateCreated = dateCreatedIn && new Date(dateCreatedIn).toUTCString()
  const dateModified = dateUpdated && new Date(dateUpdated).toUTCString()
  const datePublished = dateCreated && dateUpdated && new Date(dateUpdated).toUTCString()

  let captureValue = capture
  let captureItemProp = 'headline'
  if (!isSeo && !capture && (genre === 'summary' || genre === 'objections')) {
    captureValue = getCapitalizedFirstCharWords(genre)
    captureItemProp = 'genre'
  }

  const propsOut = {
    thumbnailsStructuredProps: {
      thumbnails,
      nameEntity: capture || '',
      itemPropName: 'thumbnail',
    },
    metaContentServerProps: {
      creator,
      organization,
    },
    textsPartsStructuredProps: {
      entities,
    },
  }

  return (
    <article
      className={getClasses('TextArticleStructured', classAdded)}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h2 className='_h2' itemProp={captureItemProp}>
        {isSeo ? `${getCapitalizedFirstCharWords(genre)}: ${captureValue}` : captureValue}
      </h2>
      {isSeo ? (
        <>
          <div>
            <span>Genre: </span>
            <span itemProp={'genre'}>{genre}</span>
          </div>
          {language ? (
            <div>
              <span>Language: </span>
              <span itemProp='inLanguage'>{language}</span>
            </div>
          ) : null}
          {tags.length ? (
            <div>
              <span>Keywords: </span>
              <span itemProp='keywords'>{tags.join(', ')}</span>
            </div>
          ) : null}
          {dateCreated ? (
            <div>
              <span>Created: </span>
              <span itemProp='dateCreated'>{dateCreated}</span>
            </div>
          ) : null}
          {dateModified ? (
            <div>
              <span>Modified: </span>
              <span itemProp='dateModified'>{dateModified}</span>
            </div>
          ) : null}
          {datePublished ? (
            <div>
              <span>Published: </span>
              <span itemProp='datePublished'>{datePublished}</span>
            </div>
          ) : null}
          {thumbnails && Object.keys(thumbnails).length ? (
            <div>
              <div>Image:</div>
              <ThumbnailsStructured {...propsOut.thumbnailsStructuredProps} />
            </div>
          ) : null}
        </>
      ) : null}
      <div itemProp='articleBody'>
        <TextsPartsStructured {...propsOut.textsPartsStructuredProps} />
      </div>
      {isSeo ? (
        <>
          <MetaContentServer {...propsOut.metaContentServerProps} />
        </>
      ) : null}
    </article>
  )
}

export const TextArticleStructured: TextArticleStructuredType = withConditionalWrapperYrl(
  (props: any) => !!props.isNoSeoIndexing,
  ({ children }) => <NoSeoIndexingYrl>{children}</NoSeoIndexingYrl>
)(React.memo(TextArticleStructuredComponent))

export type {
  TextArticleStructuredPropsType,
  TextArticleStructuredPropsOutType,
  TextArticleStructuredComponentType,
  TextArticleStructuredType,
}
