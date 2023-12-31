import React from 'react'
import { Helmet } from 'react-helmet'

import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { ArticleBody } from '../../Components/ArticleBody/ArticleBody'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  ArticlePresentComponentPropsType,
  ArticlePresentPropsType,
  ArticlePresentPropsOutType,
  ArticlePresentComponentType,
  ArticlePresentType,
} from './ArticlePresentTypes'

/**
 * @description Component to render ArticlePresent
 * @import import { ArticlePresent, ArticlePresentPropsType, ArticlePresentPropsOutType, ArticlePresentType } 
             from '../Components/ArticlePresent/ArticlePresent'
 */
const ArticlePresentComponent: ArticlePresentComponentType = (
  props: ArticlePresentComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const articleCapture = 'articleCapture'
  const articleDescription = 'articleDescription'
  const screenType = 'ArticlePresent'
  const canonicalHref = window.location.href

  const propsOut: ArticlePresentPropsOutType = {
    mainFrameProps: {
      screenType,
    },
  }

  return (
    <div className={getClasses('ArticlePresent', classAdded)}>
      <Helmet>
        <html lang={language} />
        <meta charSet='utf-8' />
        <title>{articleCapture}</title>
        <link rel='canonical' href={canonicalHref} />
        <meta name='description' content={articleDescription} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        {null}
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <ArticleBody />
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const ArticlePresent: ArticlePresentType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ArticlePresentComponent)
)

export type {
  ArticlePresentPropsType,
  ArticlePresentPropsOutType,
  ArticlePresentComponentType,
  ArticlePresentType,
}
