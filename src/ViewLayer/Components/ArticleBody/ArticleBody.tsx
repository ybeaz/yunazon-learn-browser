import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  ArticleBodyComponentPropsType,
  ArticleBodyPropsType,
  ArticleBodyPropsOutType,
  ArticleBodyComponentType,
  ArticleBodyType,
} from './ArticleBodyTypes'

/**
 * @description Component to render ArticleBody
 * @import import { ArticleBody, ArticleBodyPropsType, ArticleBodyPropsOutType, ArticleBodyType } 
             from '../Components/ArticleBody/ArticleBody'
 */
const ArticleBodyComponent: ArticleBodyComponentType = (
  props: ArticleBodyComponentPropsType
) => {
  const { classAdded } = props

  const propsOut: ArticleBodyPropsOutType = {}

  return (
    <div className={getClasses('ArticleBody', classAdded)}>ArticleBody</div>
  )
}

export const ArticleBody: ArticleBodyType = React.memo(ArticleBodyComponent)

export type {
  ArticleBodyPropsType,
  ArticleBodyPropsOutType,
  ArticleBodyComponentType,
  ArticleBodyType,
}
