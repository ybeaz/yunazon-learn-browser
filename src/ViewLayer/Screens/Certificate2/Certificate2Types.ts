import React from 'react'

import { DocumentType } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { Certificate2BodyPropsType } from '../../Components/Certificate2Body/Certificate2Body'
import { CertificateFrameAPropsType } from '../../Frames/CertificateFrames/CertificateFrameA/CertificateFrameATypes'

export type Certificate2ComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    tagsCloud: RootStoreType['tagsCloud']
    profiles: RootStoreType['profiles']
    documents: RootStoreType['documents']
  }
}

export type Certificate2PropsType = Omit<Certificate2ComponentPropsType, 'storeStateSlice'>

export type Certificate2PropsOutType = {
  headerFrameProps: HeaderFramePropsType
  certificateFrameProps: CertificateFrameAPropsType
  certificate2BodyProps: Certificate2BodyPropsType
}

/**
 * @import import { Certificate2ComponentPropsType, Certificate2PropsType, Certificate2PropsOutType, Certificate2ComponentType, Certificate2Type } from './Certificate2Types'
 */
export interface Certificate2ComponentType
  extends React.FunctionComponent<Certificate2ComponentPropsType> {
  (props: Certificate2ComponentPropsType): React.ReactElement
}

export type Certificate2Type = React.FunctionComponent<Certificate2PropsType>
