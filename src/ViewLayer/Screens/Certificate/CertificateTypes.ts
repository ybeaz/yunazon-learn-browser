import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'

export type CertificateComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    documents: RootStoreType['documents']
  }
}

export type CertificatePropsType = Omit<
  CertificateComponentPropsType,
  'storeStateSlice'
>

export type CertificatePropsOutType = {
  headerFrameProps: HeaderFramePropsType
}

/**
 * @import import { CertificateComponentPropsType, CertificatePropsType, CertificatePropsOutType, CertificateComponentType, CertificateType } from './CertificateType'
 */
export interface CertificateComponentType
  extends React.FunctionComponent<CertificateComponentPropsType> {
  (props: CertificateComponentPropsType): React.ReactElement
}

export type CertificateType = React.FunctionComponent<CertificatePropsType>
