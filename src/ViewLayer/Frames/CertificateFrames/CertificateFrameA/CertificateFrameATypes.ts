import React, { ReactElement } from 'react'

export type CertificateFrameAComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  borderImageSourceUrl?: string
  children?: ReactElement | null
}

export type CertificateFrameAPropsType = Omit<
  CertificateFrameAComponentPropsType,
  'storeStateSlice'
>

export type CertificateFrameAPropsOutType = Record<string, any>

/**
 * @import import { CertificateFrameAComponentPropsType, CertificateFrameAPropsType, CertificateFrameAPropsOutType, CertificateFrameAComponentType, CertificateFrameAType } from './CertificateFrameATypes'
 */
export interface CertificateFrameAComponentType
  extends React.FunctionComponent<CertificateFrameAComponentPropsType> {
  (props: CertificateFrameAComponentPropsType): React.ReactElement
}

export type CertificateFrameAType = React.FunctionComponent<CertificateFrameAPropsType>
