import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { ImageYrl } from '../ComponentsLibrary/ImageYrl/ImageYrl'
import { FooterFrame } from '../Frames/FooterFrame/FooterFrame'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame/HeaderFrame'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { Palette } from '../Components/Palette'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { SkillsExchangeGroup } from '../Components/SkillsExchangeGroup'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { MainFrame } from '../Frames/MainFrame/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { SERVERS_MAIN } from '../../Constants/servers.const' // ${SERVERS_MAIN.remote}

interface SkillsExchangeMatrixProps {
  routeProps: {
    location: {
      pathname: string
      search: string
    }
  }
  themeDafault: string
}

export const SkillsExchangeMatrix: React.FunctionComponent<
  SkillsExchangeMatrixProps
> = (props): ReactElement => {
  getEffectedRequests(['INIT_LOADING'])

  const store = useSelector((store2: RootStoreType) => store2)
  const {
    language: languageStore,
    componentsState: { isShownPalette },
  } = store

  const { themeDafault } = props

  const pathname = window?.location?.pathname
  const search = window?.location?.search
  const { sfb, scs, sfs, hiw, intro, ssr } = getParsedUrlQuery(search)

  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
    handleEvents({}, { typeEvent: 'SELECT_LANGUAGE_APP_INIT' })

    intro && handleEvents({}, { typeEvent: 'SEP_INTRO_IN', data: intro })

    ssr &&
      handleEvents({}, { typeEvent: 'SEP_SELECT_SKILLS_REQUIRED', data: ssr })
  }, [])

  const moduleCapture = 'Exchange your skills, save your time'
  const moduleDescription = 'Exchange your skills, save your time'
  const canonicalUrl = `${SERVERS_MAIN.remote}${pathname}`

  const propsOut = {
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
      isInstallMobileAppGroup: true,
    },
    mainFrameProps: {
      screenType: 'SkillsExchangeMatrix',
    },
    skillsExchangeGroupProps: {
      sfb: sfb === 'true',
      scs: scs === 'true',
      sfs: sfs === 'true',
      hiw: hiw === 'true',
    },
    imageBottomProps: {
      classAdded: 'Image_bottom',
      src: `${SERVERS_MAIN.remote}/images/city.svg`,
    },
  }

  return (
    <div className='SkillsExchangeMatrix'>
      <Helmet>
        <html lang={languageStore} />
        <meta charSet='utf-8' />
        <title>{moduleCapture}</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content={moduleDescription} />
      </Helmet>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <SkillsExchangeGroup {...propsOut.skillsExchangeGroupProps} />
        {/* middle-right */}
        {isShownPalette && <Palette />}
        {/* footer */}
        <FooterFrame>
          <ImageYrl {...propsOut.imageBottomProps} />
        </FooterFrame>
      </MainFrame>
      <SideNavigation />
    </div>
  )
}
