import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  ArticlePresentBodyComponentPropsType,
  ArticlePresentBodyPropsType,
  ArticlePresentBodyPropsOutType,
  ArticlePresentBodyComponentType,
  ArticlePresentBodyType,
} from './ArticlePresentBodyTypes'

/**
 * @description Component to render ArticlePresentBody
 * @import import { ArticlePresentBody, ArticlePresentBodyPropsType, ArticlePresentBodyPropsOutType, ArticlePresentBodyType } 
             from '../Components/ArticlePresentBody/ArticlePresentBody'
 */
const ArticlePresentBodyComponent: ArticlePresentBodyComponentType = (
  props: ArticlePresentBodyComponentPropsType
) => {
  const { classAdded, article } = props

  console.info('ArticlePresentBody [27]', { article })

  const propsOut: ArticlePresentBodyPropsOutType = {}

  return (
    <div className={getClasses('ArticlePresentBody', classAdded)}>
      ArticlePresentBody
    </div>
  )
}

export const ArticlePresentBody: ArticlePresentBodyType = React.memo(
  ArticlePresentBodyComponent
)

export type {
  ArticlePresentBodyPropsType,
  ArticlePresentBodyPropsOutType,
  ArticlePresentBodyComponentType,
  ArticlePresentBodyType,
}
