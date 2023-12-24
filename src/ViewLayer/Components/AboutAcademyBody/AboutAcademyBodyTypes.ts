import React from 'react'

export type AboutAcademyBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
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
