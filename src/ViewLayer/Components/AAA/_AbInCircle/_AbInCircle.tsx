// @ts-nocheck

import React from 'react'
import { View } from 'react-native'

import {
  withPropsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { AbInCircleType, AbInCirclePropsOutType } from './AbInCircleTypes'
import { styles } from './AbInCircleStyles'

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
 * @import import { AbInCircle } from '../Components/AbInCircle/AbInCircle'
 * @propsOut
   abInCircleProps: {
      styleProps: {
        AbInCircle: {},
        text: {},
      },
      text: initials,
      testID: 'AbInCircle',
   },
 */
const AbInCircleComponent: AbInCircleType = props => {
  const {
    styleProps = { AbInCircle: {} },
    mediaParams = mediaParamsDefault,
    text,
    colors2,
    testID,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const char0 = colors2[text[0]]
  const char1 = colors2[text[1]]

  const color = `#${char0}${char1}`

  const textOut = `${text[0].toUpperCase()}${text[1].toUpperCase()}`

  const propsOut: AbInCirclePropsOutType = {}

  return (
    <View
      style={[
        style.AbInCircle,
        styleProps.AbInCircle,
        { borderColor: color, backgroundColor: color },
      ]}
      testID={testID || 'AbInCircle'}
    >
      <Text style={[style.text, { color: 'white' }]} testID='text'>
        {textOut}
      </Text>
    </View>
  )
}

export const AbInCircle = withPropsYrl({ colors2: COLORS_2 })(
  withParamsMediaYrl(React.memo(AbInCircleComponent))
)
