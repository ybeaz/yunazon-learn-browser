import React from 'react'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type GetSideNavigationButtonsProps = {
  navigate: any
  language: RootStoreType['language']
  preferred_username: RootStoreType['authAwsCognitoUserData']['preferred_username']
}

export interface GetSideNavigationButtons {
  (props: GetSideNavigationButtonsProps): ButtonYrlPropsType[]
}

export type SideNavigationComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    preferred_username: RootStoreType['authAwsCognitoUserData']['preferred_username']
    isSideNavLeftVisible: RootStoreType['componentsState']['isSideNavLeftVisible']
  }
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
