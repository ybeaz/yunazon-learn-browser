import React from 'react'

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
    storeStateSlice: { language },
  } = props

  const propsOut: ArticlePresentPropsOutType = {
    mainFrameProps: {
      screenType: 'ArticlePresent',
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
          <ArticlePresentBody />
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

const storeStateSliceProps: string[] = ['language']
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
