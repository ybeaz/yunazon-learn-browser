import React from 'react'

import { DICTIONARY } from 'yourails_common'
import { withStoreStateSelectedYrl } from 'yourails_common'
import { getMediaSizeCrossBrowser } from 'yourails_common'
import { QRCodeSVG } from 'qrcode.react'
import { getClasses } from 'yourails_common'
import { SERVERS_MAIN } from 'yourails_common'
import {
  QrCodeModalBodyComponentPropsType,
  QrCodeModalBodyPropsType,
  QrCodeModalBodyPropsOutType,
  QrCodeModalBodyComponentType,
  QrCodeModalBodyType,
} from './QrCodeModalBodyTypes'

/**
 * @description Component to render QrCodeModalBody
 * @links To qrcode.react lib: https://www.npmjs.com/package/qrcode.react?activeTab=readme
 * @import import { QrCodeModalBody, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyType } 
             from '../Components/QrCodeModalBody/QrCodeModalBody'
 */
const QrCodeModalBodyComponent: QrCodeModalBodyComponentType = (
  props: QrCodeModalBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const linkToUrl = DICTIONARY.Link_to_URL[language]

  const { pathname, search } = location
  const url = `${SERVERS_MAIN.remote}${pathname}${search}`

  const { width, height } = getMediaSizeCrossBrowser(global)
  const qrCodeSize = Math.min(width, height) / 2

  console.info('QrCodeModalBody [27]', { url, qrCodeSize, width, height })

  const propsOut: QrCodeModalBodyPropsOutType = {
    qRCodeSvgProps: { value: url, size: qrCodeSize },
  }

  return (
    <div className={getClasses('QrCodeModalBody', classAdded)}>
      <h2>{linkToUrl}</h2>
      <QRCodeSVG {...propsOut.qRCodeSvgProps} />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
const QrCodeModalBody: QrCodeModalBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(QrCodeModalBodyComponent)
)

export type { QrCodeModalBodyPropsType, QrCodeModalBodyType }
export { QrCodeModalBody }
