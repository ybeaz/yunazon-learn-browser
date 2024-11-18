import React from 'react'

import { TextStructuredYrl } from 'yourails_common'

import { getClasses } from 'yourails_common'
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
      captureType: 'headline',
      entities: article.sections,
    },
  }

  return (
    <article className={getClasses('ArticlePresentBody', classAdded)}>
      <TextStructuredYrl {...propsOut.textStructuredProps} />
    </article>
  )
}

export const ArticlePresentBody: ArticlePresentBodyType = React.memo(ArticlePresentBodyComponent)

export type {
  ArticlePresentBodyPropsType,
  ArticlePresentBodyPropsOutType,
  ArticlePresentBodyComponentType,
  ArticlePresentBodyType,
}
