import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type ArticlePresentComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    articles: RootStoreType['articles']
    language: RootStoreType['language']
  }
}

export type ArticlePresentPropsType = Omit<
  ArticlePresentComponentPropsType,
  'storeStateSlice'
>

export type ArticlePresentPropsOutType = Record<string, any>

/**
 * @import import { ArticlePresentComponentPropsType, ArticlePresentPropsType, ArticlePresentPropsOutType, ArticlePresentComponentType, ArticlePresentType } from './ArticlePresentTypes'
 */
export interface ArticlePresentComponentType
  extends React.FunctionComponent<ArticlePresentComponentPropsType> {
  (props: ArticlePresentComponentPropsType): React.ReactElement
}

export type ArticlePresentType =
  React.FunctionComponent<ArticlePresentPropsType>
