import React from 'react'
import { RootStoreType, ActionEventType } from '../../../Interfaces/'
import { ButtonYrlPropsType } from 'yourails_view_layer_web'

export type GetSideNavigationButtonsProps = {
  navigate: any
  language: RootStoreType['language']
  sub: RootStoreType['authAwsCognitoUserData']['sub']
}

export interface GetSideNavigationButtons {
  (props: GetSideNavigationButtonsProps): ButtonYrlPropsType[]
}

export type SideNavigationComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    isSideNavLeftVisible: RootStoreType['componentsState']['isSideNavLeftVisible']
  }
  handleEvents: ActionEventType
}

export type SideNavigationPropsType = Omit<SideNavigationComponentPropsType, 'storeStateSlice'>

export type SideNavigationPropsOutType = Record<string, any>

/**
 * @import import { SideNavigationComponentPropsType, SideNavigationPropsType, SideNavigationPropsOutType, SideNavigationComponentType, SideNavigationType } from './SideNavigationTypes'
 */
export interface SideNavigationComponentType
  extends React.FunctionComponent<SideNavigationComponentPropsType> {
  (props: SideNavigationComponentPropsType): React.ReactElement
}

export type SideNavigationType = React.FunctionComponent<SideNavigationPropsType>
