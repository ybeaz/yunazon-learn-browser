import React from 'react'

export type ArticlePresentBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type ArticlePresentBodyPropsType = Omit<
  ArticlePresentBodyComponentPropsType,
  'storeStateSlice'
>

export type ArticlePresentBodyPropsOutType = Record<string, any>

/**
 * @import import { ArticlePresentBodyComponentPropsType, ArticlePresentBodyPropsType, ArticlePresentBodyPropsOutType, ArticlePresentBodyComponentType, ArticlePresentBodyType } from './ArticlePresentBodyTypes'
 */
export interface ArticlePresentBodyComponentType
  extends React.FunctionComponent<ArticlePresentBodyComponentPropsType> {
  (props: ArticlePresentBodyComponentPropsType): React.ReactElement
}

export type ArticlePresentBodyType =
  React.FunctionComponent<ArticlePresentBodyPropsType>
