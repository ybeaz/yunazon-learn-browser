import React, { useEffect } from 'react'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { TagsCloudBody } from '../../Components/TagsCloudBody/TagsCloudBody'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
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

  useEffectedInitialRequests([
    { type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } },
    { type: 'SET_TAGS_CLOUD_DATA' },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageModules'], offset: 10 },
    },
    {
      type: 'SET_PAGINATION_OFFSET',
      data: { paginationName: PaginationNameEnumType['pageTags'], offset: 120 },
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
  )
}

const storeStateSliceProps: string[] = ['language']
export const TagsCloud: TagsCloudType = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn })(
    withStoreStateSelectedYrl(storeStateSliceProps, TagsCloudComponent)
  )
)

export type { TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudComponentType, TagsCloudType }
