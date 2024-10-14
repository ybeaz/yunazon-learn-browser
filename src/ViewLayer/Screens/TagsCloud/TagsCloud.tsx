import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { TagsCloudBody } from '../../Components/TagsCloudBody/TagsCloudBody'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from 'yourails_common'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { PAGINATION_OFFSET } from '../../../Constants/pagination.const'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { PaginationNameEnumType } from '../../../Interfaces/RootStoreType'

import {
  TagsCloudComponentPropsType,
  TagsCloudPropsType,
  TagsCloudPropsOutType,
  TagsCloudComponentType,
  TagsCloudType,
} from './TagsCloudTypes'

/**
 * @description Component to render TagsCloud
 * @import import { TagsCloud, TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudType } 
             from '../Components/TagsCloud/TagsCloud'
 */
const TagsCloudComponent: TagsCloudComponentType = (props: TagsCloudComponentPropsType) => {
  const {
    classAdded,
    storeStateSlice: { language },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['TagsCloud']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  const pageModulesOffset = PAGINATION_OFFSET['pageModules']
  const pageTagsOffset = PAGINATION_OFFSET['pageTags']

  useEffectedInitialRequests([
    { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
    { type: 'SET_TAGS_CLOUD_DATA' },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageModules'], offset: pageModulesOffset },
    },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageTags'], offset: pageTagsOffset },
    },
    { type: 'GET_TAGS_CONNECTION', data: { isLoaderOverlay: true } },
  ])

  const propsOut: TagsCloudPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: true,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'TagsCloud',
    },
    tagsCloudBodyProps: {
      headline: DICTIONARY.Knowledege_tags[language],
    },
  }

  return (
    <div className={getClasses('TagsCloud')}>
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='google' content='notranslate' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <TagsCloudBody {...propsOut.tagsCloudBodyProps} />
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>{null}</FooterFrame>
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const TagsCloud: TagsCloudType = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn })(
    withStoreStateSelectedYrl(storeStateSliceProps, TagsCloudComponent)
  )
)

export type { TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudComponentType, TagsCloudType }
