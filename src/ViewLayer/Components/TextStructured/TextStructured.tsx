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
  const { entities } = props

  const getTextStructured = (arrayIn: EntitiyItemType[]): ReactElement[] => {
    return arrayIn.map((entityItem: EntitiyItemType) => {
      const { capture } = entityItem
      const text = entityItem?.text

      const divs = entityItem?.divs
      const style = entityItem?.options?.style

      let content: string | ReactElement | ReactElement[] | null = text ? (
        <p className='_paragraph' itemProp={'text'}>
          {text}
        </p>
      ) : null

      /* Create content for divs */
      if (!text && divs && divs.length && (style === undefined || style === 'p')) {
        content = (
          <p className='_paragraph' itemProp={'text'}>
            {divs.reduce((content: string, div: string) => `${content} ${div}`, '').trim()}
          </p>
        )
      } else if (!text && divs && divs.length && (style === 'ol' || style === 'ul')) {
        const listContent = divs.map((div: string) => {
          const key = nanoid()
          return (
            <li
              key={key}
              className={`_li`}
              itemType='http://schema.org/ListItem'
              itemProp='itemListElement'
            >
              {div}
            </li>
          )
        })

        /* Wrap content (<li>) with <ol> or <ul> */
        if (style === 'ol')
          content = (
            <ol className='_olStyle' itemScope itemType='http://schema.org/ItemList'>
              {listContent}
            </ol>
          )
        else if (style === 'ul')
          content = (
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
          {content}
        </div>
      )
    })
  }

  return (
    <div className='TextStructured' itemProp='articleBody'>
      {getTextStructured(entities)}
    </div>
  )
}

export const TextStructured: TextStructuredType = React.memo(TextStructuredComponent)

export type {
  EntitiyItemType,
  TextStructuredPropsType,
  TextStructuredPropsOutType,
  TextStructuredComponentType,
  TextStructuredType,
}
