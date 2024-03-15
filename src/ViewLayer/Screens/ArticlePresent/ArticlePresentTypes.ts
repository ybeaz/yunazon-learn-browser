import React from 'react'

import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ArticlePresentBodyPropsType } from '../../Components/'
import { MainFramePropsType } from '../../Frames/'

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

export type ArticlePresentPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: MainFramePropsType
  articlePresentBodyProps: ArticlePresentBodyPropsType
}

/**
 * @import import { ArticlePresentComponentPropsType, ArticlePresentPropsType, ArticlePresentPropsOutType, ArticlePresentComponentType, ArticlePresentType } from './ArticlePresentTypes'
 */
export interface ArticlePresentComponentType
  extends React.FunctionComponent<ArticlePresentComponentPropsType> {
  (props: ArticlePresentComponentPropsType): React.ReactElement
}

export type ArticlePresentType =
  React.FunctionComponent<ArticlePresentPropsType>
