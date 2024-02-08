import React, { ReactElement } from 'react'
import { nanoid } from 'nanoid'

import { getClasses } from '../../../Shared/getClasses'
import {
  EntitiyItemType,
  TextStructuredComponentPropsType,
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
} from './TextStructuredTypes'

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
  const { classAdded, entities, capture } = props

  const getStringNormalizedForReading = (str: string) => {
    let output: string | string[] = str

    output = output.split('. ')

    output = output
      .map(
        (item: string) =>
          item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      )
      .join('. ')

    return output
  }

  const getTextStructured = (arrayIn: EntitiyItemType[]): ReactElement[] => {
    return arrayIn.map((entityItem: EntitiyItemType) => {
      const { capture } = entityItem
      const textM2 = entityItem?.text
      const text = textM2 && getStringNormalizedForReading(textM2)

      // console.info('TextStructured [38]', { text, textM2 })
      const divs = entityItem?.divs

      let isTextIdent = true
      if (entityItem?.options?.isTextIdent !== undefined)
        isTextIdent = entityItem?.options?.isTextIdent

      let divContent: string | ReactElement | ReactElement[] | null =
        <span itemProp='text'>{text}</span> || null

      /* Create content */
      if (
        !text &&
        divs &&
        divs.length &&
        entityItem?.options?.isList === undefined
      ) {
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
        (entityItem?.options?.isList === 'olStyle' ||
          entityItem?.options?.isList === 'ulStyle')
      ) {
        divContent = divs.map((div: string) => {
          const key = nanoid()
          return (
            <li
              key={key}
              className={`_li ${!isTextIdent ? '_noTextIdent' : ''}`}
              itemProp='description'
            >
              {div}
            </li>
          )
        })

        /* Wrap content (<li>) with <ol> or <ul> */
        if (entityItem?.options?.isList === 'olStyle')
          divContent = (
            <ol
              className='_olStyle'
              itemScope
              itemType='http://schema.org/ItemList'
            >
              {divContent}
            </ol>
          )
        else if (entityItem?.options?.isList === 'ulStyle')
          divContent = (
            <ul
              className='_ulStyle'
              itemScope
              itemType='http://schema.org/ItemList'
            >
              {divContent}
            </ul>
          )
      }

      const key = nanoid()
      return (
        <div key={key} className='_captureTextWrapper'>
          <h3 className='_capture' itemProp='alternativeHeadline'>
            {capture}
          </h3>
          <div className='_text' itemProp='text'>
            {divContent}
          </div>
        </div>
      )
    })
  }

  const propsOut: TextStructuredPropsOutType = {}
  console.info('TextStructured [135]', { propsOut })
  return (
    <article
      className={getClasses('TextStructured', classAdded)}
      itemScope
      itemType='https://schema.org/Article'
    >
      <h2 className='_h2' itemProp='genre'>
        {capture}
      </h2>
      {getTextStructured(entities)}
    </article>
  )
}

export const TextStructured: TextStructuredType = React.memo(
  TextStructuredComponent
)

export type {
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
}
