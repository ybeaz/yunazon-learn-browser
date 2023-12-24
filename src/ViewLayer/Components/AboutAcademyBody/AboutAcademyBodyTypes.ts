import React from 'react'
import { BuildDataType } from '../../../@types/BuildDataType'

export type AboutAcademyBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  buildData: BuildDataType
  storeStateSlice: any
}

export type AboutAcademyBodyPropsType = Omit<
  AboutAcademyBodyComponentPropsType,
  'storeStateSlice'
>

export type AboutAcademyBodyPropsOutType = Record<string, any>

/**
 * @import import { AboutAcademyBodyComponentPropsType, AboutAcademyBodyPropsType, AboutAcademyBodyPropsOutType, AboutAcademyBodyComponentType, AboutAcademyBodyType } from './AboutAcademyBodyTypes'
 */
export interface AboutAcademyBodyComponentType
  extends React.FunctionComponent<AboutAcademyBodyComponentPropsType> {
  (props: AboutAcademyBodyComponentPropsType): React.ReactElement
}

export type AboutAcademyBodyType =
  React.FunctionComponent<AboutAcademyBodyPropsType>
