import React, { ReactElement } from 'react'
import { nanoid } from 'nanoid'

import { getClasses } from '../../../Shared/getClasses'
import { getCapitalizedFirstCharWords } from '../../../Shared/getCapitalizedFirstCharWords'
import { ThumbnailsStructured } from '../ThumbnailsStructured/ThumbnailsStructured'
import { MetaContentServer } from '../MetaContentServer/MetaContentServer'

import {
  EntitiyItemType,
  TextStructuredComponentPropsType,
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
} from './TextStructuredTypes'

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
 * @description Component to render TextStructured
 * @link Schema:Article https://schema.org/Article
 * @link Schems:ItemList http://schema.org/ItemList
 * @link Schema.org CreativeWork https://schema.org/CreativeWork
 * @link Microdata https://html.spec.whatwg.org/multipage/microdata.html
 * @link Microformats https://microformats.org/wiki/Main_Page
 * @import import { TextStructured, TextStructuredPropsType, TextStructuredPropsOutType, TextStructuredType } 
             from '../Components/TextStructured/TextStructured'
 */
const TextStructuredComponent: TextStructuredComponentType = (
  props: TextStructuredComponentPropsType
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
    thumbnails,
    creator = propsDefault.creator,
    organization = propsDefault.organization,
    isSeo = false,
  } = props

  const getTextStructured = (arrayIn: EntitiyItemType[]): ReactElement[] => {
    return arrayIn.map((entityItem: EntitiyItemType) => {
      const { capture } = entityItem
      const text = entityItem?.text

      const divs = entityItem?.divs

      let isTextIdent = true
      if (entityItem?.options?.isTextIdent !== undefined)
        isTextIdent = entityItem?.options?.isTextIdent

      let divContent: string | ReactElement | ReactElement[] | null = text ? (
        <span itemProp='text'>{text}</span>
      ) : null

      /* Create content */
      if (!text && divs && divs.length && entityItem?.options?.isList === undefined) {
        divContent = divs.map((div: string) => {
          const key = nanoid()
          return (
            <p
              key={key}
              className={`_paragraph ${!isTextIdent ? '_noTextIdent' : ''}`}
              itemProp='text'
            >
              {div}
            </p>
          )
        })
      } else if (
        !text &&
        divs &&
        divs.length &&
        (entityItem?.options?.isList === 'olStyle' || entityItem?.options?.isList === 'ulStyle')
      ) {
        const listContent = divs.map((div: string) => {
          const key = nanoid()
          return (
            <li
              key={key}
              className={`_li ${!isTextIdent ? '_noTextIdent' : ''}`}
              itemType='http://schema.org/ListItem'
              itemProp='itemListElement'
            >
              {div}
            </li>
          )
        })

        /* Wrap content (<li>) with <ol> or <ul> */
        if (entityItem?.options?.isList === 'olStyle')
          divContent = (
            <ol className='_olStyle' itemScope itemType='http://schema.org/ItemList'>
              {listContent}
            </ol>
          )
        else if (entityItem?.options?.isList === 'ulStyle')
          divContent = (
            <ul className='_ulStyle' itemScope itemType='http://schema.org/ItemList'>
              {listContent}
            </ul>
          )
      }

      const key = nanoid()
      return (
        <div key={key} className='_captureTextWrapper'>
          <h3 className='_capture' itemProp='alternativeHeadline'>
            {capture}
          </h3>
          <div className='_text'>{divContent}</div>
        </div>
      )
    })
  }

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
  }

  return (
    <article
      className={getClasses('TextStructured', classAdded)}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h2 className='_h2' itemProp={captureItemProp}>
        {`${getCapitalizedFirstCharWords(genre)} ${isSeo ? ':' : ''} ${captureValue}`}
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
      <div itemProp='articleBody'>{getTextStructured(entities)}</div>
      {isSeo ? (
        <>
          <MetaContentServer {...propsOut.metaContentServerProps} />
        </>
      ) : null}
    </article>
  )
}

export const TextStructured: TextStructuredType = React.memo(TextStructuredComponent)

export type {
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
}
