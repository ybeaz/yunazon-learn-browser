import React from 'react'

import { TextStructuredYrlPropsType } from 'yourails_common'

export type ArticlePresentBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  article: any
}

export type ArticlePresentBodyPropsType = Omit<
  ArticlePresentBodyComponentPropsType,
  'storeStateSlice'
>

export type ArticlePresentBodyPropsOutType = {
  textStructuredProps: TextStructuredYrlPropsType
}

/**
 * @import import { ArticlePresentBodyComponentPropsType, ArticlePresentBodyPropsType, ArticlePresentBodyPropsOutType, ArticlePresentBodyComponentType, ArticlePresentBodyType } from './ArticlePresentBodyTypes'
 */
export interface ArticlePresentBodyComponentType
  extends React.FunctionComponent<ArticlePresentBodyComponentPropsType> {
  (props: ArticlePresentBodyComponentPropsType): React.ReactElement
}

export type ArticlePresentBodyType = React.FunctionComponent<ArticlePresentBodyPropsType>
