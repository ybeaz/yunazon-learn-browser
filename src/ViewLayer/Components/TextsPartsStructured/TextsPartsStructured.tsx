import React from 'react'

import { TextStructured } from '../../Components/TextStructured/TextStructured'
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
  const { classAdded, entities } = props

  const propsOut: TextsPartsStructuredPropsOutType = {
    testStructuredProps: {
      entities,
    },
  }

  return (
    <div className={getClasses('TextsPartsStructured', classAdded)}>
      <TextStructured {...propsOut.textStructuredProps} />
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
