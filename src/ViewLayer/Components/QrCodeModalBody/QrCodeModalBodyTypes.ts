import React from 'react'

export type QrCodeModalBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type QrCodeModalBodyPropsType = Omit<QrCodeModalBodyComponentPropsType, 'storeStateSlice'>

export type QrCodeModalBodyPropsOutType = Record<string, any>

/**
 * @import import { QrCodeModalBodyComponentPropsType, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyComponentType, QrCodeModalBodyType } from './QrCodeModalBodyTypes'
 */
export interface QrCodeModalBodyComponentType
  extends React.FunctionComponent<QrCodeModalBodyComponentPropsType> {
  (props: QrCodeModalBodyComponentPropsType): React.ReactElement
}

export type QrCodeModalBodyType = React.FunctionComponent<QrCodeModalBodyPropsType>
