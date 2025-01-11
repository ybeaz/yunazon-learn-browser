import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { InputGroupYrlPropsType, ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type QrCodeModalBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    screenActive: RootStoreType['componentsState']['screenActive']
    isSendBccInputVisible: RootStoreType['componentsState']['isSendBccInputVisible']
  }
  handleEvents: HandleEventType
}

export type QrCodeModalBodyPropsType = Omit<QrCodeModalBodyComponentPropsType, 'storeStateSlice'>

export type QrCodeModalBodyPropsOutType = {
  qRCodeSvgProps: { value: string; size: number }
  inputSendBccProps: InputGroupYrlPropsType
  buttonIsSendBccVisibleProps: ButtonYrlPropsType
}

/**
 * @import import { QrCodeModalBodyComponentPropsType, QrCodeModalBodyPropsType, QrCodeModalBodyPropsOutType, QrCodeModalBodyComponentType, QrCodeModalBodyType } from './QrCodeModalBodyTypes'
 */
export interface QrCodeModalBodyComponentType
  extends React.FunctionComponent<QrCodeModalBodyComponentPropsType> {
  (props: QrCodeModalBodyComponentPropsType): React.ReactElement
}

export type QrCodeModalBodyType = React.FunctionComponent<QrCodeModalBodyPropsType>
