import React from 'react'
import { nanoid } from 'nanoid'

import { TextStructured, EntitiyItemType } from '../../Components/TextStructured/TextStructured'
import { getClasses } from '../../../Shared/getClasses'
import {
  TextsPartsStructuredComponentPropsType,
  TextsPartsStructuredPropsType,
  TextsPartsStructuredPropsOutType,
  TextsPartsStructuredComponentType,
  TextsPartsStructuredType,
} from './TextsPartsStructuredTypes'

/**
 * @description Component to render TextsPartsStructured
 * @import import { TextsPartsStructured, 
    TextsPartsStructuredPropsType, 
    TextsPartsStructuredPropsOutType,
    TextsPartsStructuredType } from '../Components/TextsPartsStructured/TextsPartsStructured'
 */
const TextsPartsStructuredComponent: TextsPartsStructuredComponentType = (
  props: TextsPartsStructuredComponentPropsType
) => {
  const { classAdded, entities: entitiesIn } = props

  const entities = Array.isArray(entitiesIn[0]) ? entitiesIn : ([entitiesIn] as EntitiyItemType[][])

  const getTestsPartsStructured = (entitiesArgs: EntitiyItemType[][]) => {
    return entitiesArgs.map((entitiesArg: EntitiyItemType[], index: number) => {
      const propsOut: TextsPartsStructuredPropsOutType = {
        textStructuredProps: {
          entities: entitiesArg,
        },
      }

      const key = nanoid()
      const headline = entitiesArgs.length > 1 && index > 0 && `Part ${index + 1}`

      return (
        <div key={key} className='_textPart'>
          {headline && <h2 className='_capturePart'>{headline}</h2>}
          <TextStructured {...propsOut.textStructuredProps} />
        </div>
      )
    })
  }

  return (
    <div className={getClasses('TextsPartsStructured', classAdded)}>
      {/* @ts-expect-error */}
      {getTestsPartsStructured(entities)}
    </div>
  )
}

export const TextsPartsStructured: TextsPartsStructuredType = React.memo(
  TextsPartsStructuredComponent
)

export type {
  TextsPartsStructuredPropsType,
  TextsPartsStructuredPropsOutType,
  TextsPartsStructuredComponentType,
  TextsPartsStructuredType,
}
