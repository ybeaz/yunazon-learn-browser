import React from 'react'
import { BuildDataType } from '../../../@types/BuildDataType'

export type AcademyAboutBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  buildData: BuildDataType
  storeStateSlice: any
}

export type AcademyAboutBodyPropsType = Omit<AcademyAboutBodyComponentPropsType, 'storeStateSlice'>

export type AcademyAboutBodyPropsOutType = Record<string, any>

/**
 * @import import { AcademyAboutBodyComponentPropsType, AcademyAboutBodyPropsType, AcademyAboutBodyPropsOutType, AcademyAboutBodyComponentType, AcademyAboutBodyType } from './AcademyAboutBodyTypes'
 */
export interface AcademyAboutBodyComponentType
  extends React.FunctionComponent<AcademyAboutBodyComponentPropsType> {
  (props: AcademyAboutBodyComponentPropsType): React.ReactElement
}

export type AcademyAboutBodyType = React.FunctionComponent<AcademyAboutBodyPropsType>
