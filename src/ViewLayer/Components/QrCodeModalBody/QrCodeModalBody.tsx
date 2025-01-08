import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'

import { getClasses } from 'yourails_common'
import {
  QrCodeModalBodyComponentPropsType,
  QrCodeModalBodyPropsType,
  QrCodeModalBodyPropsOutType,
  QrCodeModalBodyComponentType,
  QrCodeModalBodyType,
} from './QrCodeModalBodyTypes'

/**
 * @description Component to render QrCodeModalBody
 * @import import { QrCodeModalBody, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyType } 
             from '../Components/QrCodeModalBody/QrCodeModalBody'
 */
const QrCodeModalBodyComponent: QrCodeModalBodyComponentType = (
  props: QrCodeModalBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: QrCodeModalBodyPropsOutType = {}

  return <div className={getClasses('QrCodeModalBody', classAdded)}>QrCodeModalBody</div>
}

const storeStateSliceProps: string[] = []
const QrCodeModalBody: QrCodeModalBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(QrCodeModalBodyComponent)
)

export type { QrCodeModalBodyPropsType, QrCodeModalBodyType }
export { QrCodeModalBody }
