import React from 'react'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type SideNavigationComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type SideNavigationPropsType = Omit<
  SideNavigationComponentPropsType,
  'storeStateSlice'
>

export type SideNavigationPropsOutType = Record<string, any>

/**
 * @import import { SideNavigationComponentPropsType, SideNavigationPropsType, SideNavigationPropsOutType, SideNavigationComponentType, SideNavigationType } from './SideNavigationTypes'
 */
export interface SideNavigationComponentType
  extends React.FunctionComponent<SideNavigationComponentPropsType> {
  (props: SideNavigationComponentPropsType): React.ReactElement
}

export type SideNavigationType =
  React.FunctionComponent<SideNavigationPropsType>
