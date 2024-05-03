import React, { useEffect } from 'react'

import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { TagsCloudBody } from '../../Components/TagsCloudBody/TagsCloudBody'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { SERVERS_MAIN } from '../../../Constants/servers.const'

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

  useEffect(() => {
    handleEvents({}, { typeEvent: 'GET_TAGS_CLOUD_MODULES' })
  }, [])

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
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'TagsCloud',
    },
  }

  return (
    <MainFrame {...propsOut.mainFrameProps}>
      {/* header */}
      <HeaderFrame {...propsOut.headerFrameProps} />
      {/* middle-left */}
      {null}
      {/* middle-main */}
      <TagsCloudBody />
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
