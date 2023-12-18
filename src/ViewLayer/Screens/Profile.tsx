import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { ProfileBody } from '../Components/ProfileBody'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { ImageYrl } from '../ComponentsLibrary/ImageYrl/ImageYrl'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../Frames/MainFrame/MainFrame'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { useEffectedInitialRequests } from '../Hooks/useEffectedInitialRequests'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface ProfileArgs {
  routeProps: {}
  themeDafault: string
}

export const Profile: React.FunctionComponent<ProfileArgs> = (
  props: ProfileArgs
): ReactElement => {
  useEffectedInitialRequests(['INIT_LOADING'])

  const store = useSelector((store2: RootStoreType) => store2)
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
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRailsV21.png`,
      contentComponentName: 'SkillsExchangeMatrix',
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: false,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    profileBodyProps: {},
    imageBottomProps: {
      classAdded: 'Image_bottom',
      src: `${SERVERS_MAIN.remote}/images/city.svg`,
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
        <div>ProfileBody</div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>
          <ImageYrl {...propsOut.imageBottomProps} />
        </FooterFrame>
      </MainFrame>
      <SideNavigation />
    </div>
  )
}
