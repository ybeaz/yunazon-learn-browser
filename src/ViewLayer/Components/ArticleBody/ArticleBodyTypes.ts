import React from 'react'

export type ArticleBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
}

export type ArticleBodyPropsType = Omit<
  ArticleBodyComponentPropsType,
  'storeStateSlice'
>

export type ArticleBodyPropsOutType = Record<string, any>

/**
 * @import import { ArticleBodyComponentPropsType, ArticleBodyPropsType, ArticleBodyPropsOutType, ArticleBodyComponentType, ArticleBodyType } from './ArticleBodyTypes'
 */
export interface ArticleBodyComponentType
  extends React.FunctionComponent<ArticleBodyComponentPropsType> {
  (props: ArticleBodyComponentPropsType): React.ReactElement
}

export type ArticleBodyType = React.FunctionComponent<ArticleBodyPropsType>
