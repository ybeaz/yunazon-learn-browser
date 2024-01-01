import React from 'react'
import { nanoid } from 'nanoid'

import { ArticleType } from '../../../@types/ArticleMockType'
import { TextStructured } from '../TextStructured/TextStructured'

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
  const { sections } = article

  const propsOut: ArticlePresentBodyPropsOutType = {
    textStructuredProps: {
      capture: article.capture,
      entities: article.sections,
    },
  }

  return (
    <div className={getClasses('ArticlePresentBody', classAdded)}>
      <TextStructured {...propsOut.textStructuredProps} />
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
