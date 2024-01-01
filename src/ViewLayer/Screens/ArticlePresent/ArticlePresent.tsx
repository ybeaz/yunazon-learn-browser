import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ImageYrl } from '../../ComponentsLibrary/ImageYrl/ImageYrl'
import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { ArticlePresentBody } from '../../Components/ArticlePresentBody/ArticlePresentBody'

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
    storeStateSlice: { articles, language },
  } = props

  const params = useParams()
  const articleID = params?.articleID

  const articleFound =
    articles.find((article: any) => article.articleID === articleID) ||
    articles[0]

  useEffect(() => {
    if (Array.isArray(articles) && !articleFound) {
      handleEvents({}, { typeEvent: 'FIND_ARTICLE', data: articleID })
    }
  }, [])

  const propsOut: ArticlePresentPropsOutType = {
    mainFrameProps: {
      screenType: 'ArticlePresent',
    },
    articlePresentBodyProps: {
      article: articleFound,
    },
  }

  return (
    <div className={getClasses('ArticlePresent', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        {null}
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>
          {articleFound && articleFound.articleID ? (
            <ArticlePresentBody {...propsOut.articlePresentBodyProps} />
          ) : null}
        </div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
      <SideNavigation />
    </div>
  )
}

const storeStateSliceProps: string[] = ['articles', 'language']
export const ArticlePresent = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ArticlePresentComponent)
)

export type {
  ArticlePresentPropsType,
  ArticlePresentPropsOutType,
  ArticlePresentComponentType,
  ArticlePresentType,
}
