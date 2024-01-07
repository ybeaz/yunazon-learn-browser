import React from 'react'

import { InputYrlPropsType, ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type SearchGroupComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type SearchGroupPropsType = Omit<
  SearchGroupComponentPropsType,
  'storeStateSlice'
>

export type SearchGroupPropsOutType = {
  inputSearchProps: InputYrlPropsType
  buttonMdSearchProps: ButtonYrlPropsType
}

/**
 * @import import { SearchGroupComponentPropsType, SearchGroupPropsType, SearchGroupPropsOutType, SearchGroupComponentType, SearchGroupType } from './SearchGroupTypes'
 */
export interface SearchGroupComponentType
  extends React.FunctionComponent<SearchGroupComponentPropsType> {
  (props: SearchGroupComponentPropsType): React.ReactElement
}

export type SearchGroupType = React.FunctionComponent<SearchGroupPropsType>
