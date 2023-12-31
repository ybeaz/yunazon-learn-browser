import React, { ReactElement } from 'react'
import { nanoid } from 'nanoid'

import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'
import { SectionType } from '../../../@types/ArticleMockType'

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

      let divContent: string | ReactElement[] | null = text || null
      if (!text && divs && divs.length) {
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
