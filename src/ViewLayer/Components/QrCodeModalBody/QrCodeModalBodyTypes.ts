import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type QrCodeModalBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type QrCodeModalBodyPropsType = Omit<QrCodeModalBodyComponentPropsType, 'storeStateSlice'>

export type QrCodeModalBodyPropsOutType = {
  qRCodeSvgProps: { value: string; size: number }
}

/**
 * @import import { QrCodeModalBodyComponentPropsType, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyComponentType, QrCodeModalBodyType } from './QrCodeModalBodyTypes'
 */
export interface QrCodeModalBodyComponentType
  extends React.FunctionComponent<QrCodeModalBodyComponentPropsType> {
  (props: QrCodeModalBodyComponentPropsType): React.ReactElement
}

export type QrCodeModalBodyType = React.FunctionComponent<QrCodeModalBodyPropsType>
