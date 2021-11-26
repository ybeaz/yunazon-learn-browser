import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { FooterFrame } from '../Frames/FooterFrame'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { BackgroundImage } from '../Frames/BackgroundImage'
import { Palette } from '../Components/Palette'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { SearchGroupSep } from '../Components/SearchGroupSep'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'

interface SkillsExchangeSearchProps {
  routeProps: {
    location: {
      pathname: string
      search: string
    }
  }
  themeDafault: string
}

export const SkillsExchangeSearch: React.FunctionComponent<SkillsExchangeSearchProps> =
  (props): ReactElement => {
    getEffectedRequests(['GET_GLOBAL_VARS'])

    const store = useSelector((store2: IRootStore) => store2)
    const {
      language: languageStore,
      componentsState: { isShownSkillExchangeIntro, isShownPalette },
    } = store

    const {
      routeProps: {
        location: { search },
      },
      themeDafault,
    } = props

    useEffect(() => {
      handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })

      isShownSkillExchangeIntro &&
        handleEvents({}, { typeEvent: 'SEP_INTRO_IN' })

      const query = getParsedUrlQuery(search)
      query.ssr &&
        handleEvents(
          {},
          { typeEvent: 'SEP_SELECT_SKILLS_REQUIRED', data: query.ssr }
        )
    }, [])

    const moduleCapture = 'Exchange your skills, save your time'
    const moduleDescription = 'Exchange your skills, save your time'
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`

    const headerFrameProps = {
      brandName: 'YourRails',
      contentComponentName: 'SearchFormSep',
      isButtonSideMenu: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      selectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: true,
      isInstallMobileAppGroup: true,
    }

    const mainFrameProps = {
      screenType: 'SkillsExchangeSearch',
    }

    const backgroundImageProps = {
      classAdded: 'BackgroundImage_SkillsExchangeSearch',
    }

    return (
      <div className='SkillsExchangeSearch'>
        <Helmet>
          <html lang={languageStore} />
          <meta charSet='utf-8' />
          <title>{moduleCapture}</title>
          <link rel='canonical' href={canonicalUrl} />
          <meta name='description' content={moduleDescription} />
        </Helmet>
        <MainFrame {...mainFrameProps}>
          {/* header */}
          <HeaderFrame {...headerFrameProps} />
          {/* middle-left */}
          {null}
          {/* middle-main */}
          <SearchGroupSep />
          {/* middle-right */}
          {isShownPalette && <Palette />}
          {/* footer */}
          <FooterFrame>
            <BackgroundImage {...backgroundImageProps}>
              <div></div>
            </BackgroundImage>
          </FooterFrame>
        </MainFrame>
        <SideNavigation />
      </div>
    )
  }
