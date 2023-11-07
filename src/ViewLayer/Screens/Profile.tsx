import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ProfileBody } from '../Components/ProfileBody'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Image } from '../ComponentsLibrary/Image'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { FooterFrame } from '../Frames/FooterFrame'
import { MainFrame } from '../Frames/MainFrame'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'

interface ProfileArgs {
  routeProps: {}
  themeDafault: string
}

export const Profile: React.FunctionComponent<ProfileArgs> = (
  props: ProfileArgs
): ReactElement => {
  getEffectedRequests(['GET_GLOBAL_VARS'])

  const store = useSelector((store2: IRootStore) => store2)
  const {
    language: languageStore,
    componentsState: { isShownPalette },
  } = store

  const { themeDafault } = props

  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
    handleEvents({}, { typeEvent: 'SELECT_LANGUAGE_APP_INIT' })
  }, [])

  const propsOut = {
    mainFrameProps: {
      screenType: 'Profile',
    },
    headerFrameProps: {
      brandName: `YouRails`,
      moto: DICTIONARY['Together_know_everything'][languageStore],
      logoPath: 'https://study.yourails.com/images/logoYouRailsV21.png',
      contentComponentName: 'SkillsExchangeMatrix',
      isButtonSideMenu: true,
      isLogoGroup: true,
      isButtonAddCourse: false,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
      isInstallMobileAppGroup: true,
    },
    profileBodyProps: {},
    imageBottomProps: {
      classAdded: 'Image_bottom',
      src: 'https://study.yourails.com/images/city.svg',
    },
  }
  return (
    <div className='Profile'>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <ProfileBody {...propsOut.profileBodyProps} />
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>
          <Image {...propsOut.imageBottomProps} />
        </FooterFrame>
      </MainFrame>
      <SideNavigation />
    </div>
  )
}
