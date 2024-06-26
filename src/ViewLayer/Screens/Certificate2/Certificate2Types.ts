import React from 'react'

export type Certificate2ComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type Certificate2PropsType = Omit<Certificate2ComponentPropsType, 'storeStateSlice'>

export type Certificate2PropsOutType = Record<string, any>

/**
 * @import import { Certificate2ComponentPropsType, Certificate2PropsType, Certificate2PropsOutType, Certificate2ComponentType, Certificate2Type } from './Certificate2Types'
 */
export interface Certificate2ComponentType
  extends React.FunctionComponent<Certificate2ComponentPropsType> {
  (props: Certificate2ComponentPropsType): React.ReactElement
}

export type Certificate2Type = React.FunctionComponent<Certificate2PropsType>
