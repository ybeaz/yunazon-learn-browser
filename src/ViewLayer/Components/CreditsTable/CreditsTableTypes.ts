import React from 'react'
import { NavLinkProps } from 'react-router-dom'

import { RootStoreType } from '../../../Interfaces/'
import { HandleEventType } from 'yourails_common'
import { ButtonYrlPropsType } from 'yourails_common'
import { PaginationNavigationPropsType } from '../../Components/'

export type CreditsTableComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  documents: RootStoreType['documents']
  pageDocuments: RootStoreType['componentsState']['pagination']['pageDocuments']
  handleEvents: HandleEventType
}

export type CreditsTableItemPropsOutType = {
  linkToDocumentProps: NavLinkProps
  linkToModuleProps: NavLinkProps
  buttonDeactivateDocumentProps: ButtonYrlPropsType
}

export type CreditsTablePropsType = Omit<CreditsTableComponentPropsType, 'handleEvents'>

export type CreditsTablePropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { CreditsTableComponentPropsType, CreditsTablePropsType, CreditsTablePropsOutType, CreditsTableComponentType, CreditsTableType } from './CreditsTableTypes'
 */
export interface CreditsTableComponentType
  extends React.FunctionComponent<CreditsTableComponentPropsType> {
  (props: CreditsTableComponentPropsType): React.ReactElement
}

export type CreditsTableType = React.FunctionComponent<CreditsTablePropsType>
