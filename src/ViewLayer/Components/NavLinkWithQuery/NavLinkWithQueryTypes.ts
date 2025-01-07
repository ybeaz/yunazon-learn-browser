import React from 'react'
import { NavLinkProps } from 'react-router-dom'
import { RootStoreType } from '../../../Interfaces/'

export type NavLinkWithQueryComponentPropsType = NavLinkProps & {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    urlParamsQuery: RootStoreType['urlParamsQuery']
  }
}

export type NavLinkWithQueryPropsType = Omit<NavLinkWithQueryComponentPropsType, 'storeStateSlice'>

export type NavLinkWithQueryPropsOutType = Record<string, any>

/**
 * @import import { NavLinkWithQueryComponentPropsType, NavLinkWithQueryPropsType, NavLinkWithQueryPropsOutType, NavLinkWithQueryComponentType, NavLinkWithQueryType } from './NavLinkWithQueryTypes'
 */
export interface NavLinkWithQueryComponentType
  extends React.FunctionComponent<NavLinkWithQueryComponentPropsType> {
  (props: NavLinkWithQueryComponentPropsType): React.ReactElement
}

export type NavLinkWithQueryType = React.FunctionComponent<NavLinkWithQueryPropsType>
