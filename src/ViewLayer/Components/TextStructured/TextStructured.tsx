import React, { ReactElement } from 'react'
import { nanoid } from 'nanoid'

import { SummaryItemType, ObjectionType } from '../../../@types/GraphqlTypes.d'

import { getClasses } from '../../../Shared/getClasses'
import {
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
  const { classAdded, testsEntities, title } = props

  const getTextStructured = (
    arrayIn: (SummaryItemType | ObjectionType)[]
  ): ReactElement[] => {
    return arrayIn.map((testsEntitiesItem: SummaryItemType | ObjectionType) => {
      const { capture, text } = testsEntitiesItem
      const key = nanoid()
      return (
        <div key={key} className='_captureTextWrapper'>
          <h3 className='_capture'>{capture}</h3>
          <div className='_text'>{text}</div>
        </div>
      )
    })
  }

  const propsOut: TextStructuredPropsOutType = {}

  return (
    <div className={getClasses('TextStructured', classAdded)}>
      <h2 className='_h2'>{title}</h2>
      {getTextStructured(testsEntities)}
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
