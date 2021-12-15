import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { Image } from '../Components/Image'
import { FooterFrame } from '../Frames/FooterFrame'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
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
    const { language } = useSelector((store2: IRootStore) => store2)
    getEffectedRequests(['GET_GLOBAL_VARS'])

    const store = useSelector((store2: IRootStore) => store2)
    const {
      language: languageStore,
      componentsState: { isShownPalette },
    } = store

    const {
      routeProps: {
        location: { search },
      },
      themeDafault,
    } = props
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
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`

    const propsOut = {
      headerFrameProps: {
        brandName: `YouRails`,
        moto: DICTIONARY['Together_know_everything'][language],
        logoPath: 'https://yourails.com/images/logoYouRailsV21.png',
        contentComponentName: 'SkillsExchangeSearch',
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
      mainFrameProps: {
        screenType: 'SkillsExchangeSearch',
      },
      searchGroupSepProps: {
        sfb: sfb === 'true',
        scs: scs === 'true',
        sfs: sfs === 'true',
        hiw: hiw === 'true',
      },
      imageBottomProps: {
        classAdded: 'Image_bottom',
        src: 'https://yourails.com/images/city.svg',
      },
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
        <MainFrame {...propsOut.mainFrameProps}>
          {/* header */}
          <HeaderFrame {...propsOut.headerFrameProps} />
          {/* middle-left */}
          {null}
          {/* middle-main */}
          <SearchGroupSep {...propsOut.searchGroupSepProps} />
          {/* middle-right */}
          {isShownPalette && <Palette />}
          {/* footer */}
          <FooterFrame>
            <Image {...propsOut.imageBottomProps} />
          </FooterFrame>
        </MainFrame>
        <SideNavigation />
      </div>
    )
  }
