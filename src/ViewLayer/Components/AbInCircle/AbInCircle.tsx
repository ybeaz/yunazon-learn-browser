import React from 'react'

import { withPropsYrl } from '../../ComponentsLibrary'
import { getClasses } from '../../../Shared/getClasses'

import {
  AbInCirclePropsType,
  AbInCirclePropsOutType,
  AbInCircleComponentType,
  AbInCircleType,
} from './AbInCircleTypes'

const COLORS_2 = {
  A: '219' /* (Google Material Color: Red 500) */,
  B: 'F80' /*  (Google Material Color: Deep Orange 500) */,
  C: 'FF0' /*  (Google Material Color: Yellow 500) */,
  D: 'AB4' /*  (Google Material Color: Lime 500) */,
  E: '0D9' /*  (Google Material Color: Light Blue 500) */,
  F: '26C' /*  (Google Material Color: Blue 500) */,
  G: '9C6' /*  (Google Material Color: Green 500) */,
  H: '793' /*  (Google Material Color: Teal 500) */,
  I: '86E' /*  (Google Material Color: Cyan 500) */,
  J: '09C' /*  (Google Material Color: Light Blue 500) */,
  K: '3B8' /*  (Google Material Color: Indigo 500) */,
  L: 'F08' /*  (Google Material Color: Pink 500) */,
  M: 'C72' /*  (Google Material Color: Deep Purple 500) */,
  N: 'A4C' /*  (Google Material Color: Purple 500) */,
  O: '4E5' /*  (Google Material Color: Deep Orange 500) */,
  P: '673' /*  (Google Material Color: Brown 500) */,
  Q: '09C' /*  (Google Material Color: Light Blue 500) */,
  R: '26C' /*  (Google Material Color: Blue 500) */,
  S: '9C6' /*  (Google Material Color: Green 500) */,
  T: '793' /*  (Google Material Color: Teal 500) */,
  U: '86E' /*  (Google Material Color: Cyan 500) */,
  V: 'F08' /*  (Google Material Color: Pink 500) */,
  W: 'C72' /*  (Google Material Color: Deep Purple 500) */,
  X: 'A4C' /*  (Google Material Color: Purple 500) */,
  Y: '4E5' /*  (Google Material Color: Deep Orange 500) */,
  Z: '673' /*  (Google Material Color: Brown 500) */,
}

/**
 * @description Component to render AbInCircle
 * @import import { AbInCircle, AbInCirclePropsType, AbInCirclePropsOutType, AbInCircleType } 
             from '../Components/AbInCircle/AbInCircle'
 */
const AbInCircleComponent: AbInCircleComponentType = (
  props: AbInCirclePropsType
) => {
  const { classAdded, text, colors2 } = props

  const text0 = text[0].toUpperCase()
  const text1 = text[1].toUpperCase()

  const char0: string = (colors2 && colors2[text0]) || ''
  const char1: string = (colors2 && colors2[text1]) || ''

  const color = `#${char0}${char1}`

  const textOut = `${text0}${text1}`

  const propsOut: AbInCirclePropsOutType = {}

  return (
    <div
      className={getClasses('AbInCircle', classAdded)}
      style={{ borderColor: color, background: color }}
    >
      <div className='_text'>{textOut}</div>
    </div>
  )
}

export const AbInCircle = withPropsYrl({ colors2: COLORS_2 })(
  React.memo(AbInCircleComponent)
)

export type {
  AbInCirclePropsType,
  AbInCirclePropsOutType,
  AbInCircleComponentType,
  AbInCircleType,
}
