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
 * @import import { TextStructured, TextStructuredPropsType, TextStructuredPropsOutType, TextStructuredType } 
             from '../Components/TextStructured/TextStructured'
 */
const TextStructuredComponent: TextStructuredComponentType = (
  props: TextStructuredComponentPropsType
) => {
  const { classAdded, entities, capture } = props

  const getTextStructured = (arrayIn: EntitiyItemType[]): ReactElement[] => {
    return arrayIn.map((entityItem: EntitiyItemType) => {
      const { capture } = entityItem
      const text = entityItem?.text
      const divs = entityItem?.divs

      let isTextIdent = true
      if (entityItem?.options?.isTextIdent !== undefined)
        isTextIdent = entityItem?.options?.isTextIdent

      let divContent: string | ReactElement | ReactElement[] | null =
        text || null
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
            >
              {div}
            </li>
          )
        })

        if (entityItem?.options?.isList === 'olStyle')
          divContent = <ol className='_olStyle'>{divContent}</ol>
        else if (entityItem?.options?.isList === 'ulStyle')
          divContent = <ul className='_ulStyle'>{divContent}</ul>
      }

      const key = nanoid()
      return (
        <div key={key} className='_captureTextWrapper'>
          <h3 className='_capture'>{capture}</h3>
          <div className='_text'>{divContent}</div>
        </div>
      )
    })
  }

  const propsOut: TextStructuredPropsOutType = {}

  return (
    <div className={getClasses('TextStructured', classAdded)}>
      <h2 className='_h2'>{capture}</h2>
      {getTextStructured(entities)}
    </div>
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
