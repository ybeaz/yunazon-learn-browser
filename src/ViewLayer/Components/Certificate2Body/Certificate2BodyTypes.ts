import React from 'react'
import { DocumentType } from '../../../@types/index'

export type Certificate2BodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  document: DocumentType
  storeStateSlice: any
}

export type Certificate2BodyPropsType = Omit<Certificate2BodyComponentPropsType, 'storeStateSlice'>

export type Certificate2BodyPropsOutType = Record<string, any>

/**
 * @import import { Certificate2BodyComponentPropsType, Certificate2BodyPropsType, Certificate2BodyPropsOutType, Certificate2BodyComponentType, Certificate2BodyType } from './Certificate2BodyTypes'
 */
export interface Certificate2BodyComponentType
  extends React.FunctionComponent<Certificate2BodyComponentPropsType> {
  (props: Certificate2BodyComponentPropsType): React.ReactElement
}

export type Certificate2BodyType = React.FunctionComponent<Certificate2BodyPropsType>
