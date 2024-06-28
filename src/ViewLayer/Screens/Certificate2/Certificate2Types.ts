import React from 'react'

import { DocumentType } from '../../../@types/GraphqlTypes'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { Certificate2BodyPropsType } from '../../Components/Certificate2Body/Certificate2Body'

export type Certificate2ComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    documents: RootStoreType['documents']
  }
}

export type Certificate2PropsType = Omit<Certificate2ComponentPropsType, 'storeStateSlice'>

export type Certificate2PropsOutType = {
  headerFrameProps: HeaderFramePropsType
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
