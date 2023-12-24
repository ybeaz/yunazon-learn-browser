import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type AboutAcademyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type AboutAcademyPropsType = Omit<
  AboutAcademyComponentPropsType,
  'storeStateSlice'
>

export type AboutAcademyPropsOutType = Record<string, any>

/**
 * @import import { AboutAcademyComponentPropsType, AboutAcademyPropsType, AboutAcademyPropsOutType, AboutAcademyComponentType, AboutAcademyType } from './AboutAcademyTypes'
 */
export interface AboutAcademyComponentType
  extends React.FunctionComponent<AboutAcademyComponentPropsType> {
  (props: AboutAcademyComponentPropsType): React.ReactElement
}

export type AboutAcademyType = React.FunctionComponent<AboutAcademyPropsType>
