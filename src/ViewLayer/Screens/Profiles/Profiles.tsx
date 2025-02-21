import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from 'yourails_common'
import { SITE_META_DATA } from 'yourails_common'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { getTagLine } from 'yourails_common'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import {
  ProfilesComponentPropsType,
  ProfilesPropsType,
  ProfilesPropsOutType,
  ProfilesComponentType,
  ProfilesType,
} from './ProfilesTypes'

/**
 * @description Component to render Profiles
 * @import import { Profiles, ProfilesPropsType, ProfilesPropsOutType, ProfilesType } 
             from '../Components/Profiles/Profiles'
 */
const ProfilesComponent: ProfilesComponentType = (props: ProfilesComponentPropsType) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const screenType = ScreensEnumType['Profiles']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`

  useEffectedInitialRequests([{ type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } }])

  const propsOut: ProfilesPropsOutType = {
    headerFrameProps: {
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
      screenType: 'AcademyPresent',
    },
  }

  return (
    <div className={getClasses('Profiles', classAdded)}>
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
        <div>Profiles - This page is under development</div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
const Profiles = withStoreStateSelectedYrl(storeStateSliceProps, React.memo(ProfilesComponent))

export { Profiles as default }

export type { ProfilesPropsType, ProfilesPropsOutType, ProfilesComponentType, ProfilesType }
