import React, { useEffect, ReactElement } from 'react'

import { Image } from '../ComponentsLibrary/Image'
import { FooterFrame } from '../Frames/FooterFrame/FooterFrame'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { StubUserGoodbye } from '../Components/StubUserGoodbye'
import { MainFrame } from '../Frames/MainFrame'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface StubForUserResearchArgs {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export const StubForUserResearch: React.FunctionComponent<
  StubForUserResearchArgs
> = (props: StubForUserResearchArgs): ReactElement => {
  const { themeDafault } = props
  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
  }, [])

  const headerFrameProps = {
    brandName: 'YouRails',
    logoPath: `${SERVERS_MAIN.remote}/images/logoYouRailsV21.png`,
    contentComponentName: 'StubForUserResearch',
    isButtonSideMenu: true,
    isLogoGroup: true,
    isButtonAddCourse: false,
    isButtonAuthUser: false,
    isSelectLanguage: true,
    isButtonThemeToggle: true,
    isSeachGroup: false,
    isButtonBack: false,
    isPageActionsGroup: false,
    isButtonsShare: false,
    isInstallMobileAppGroup: false,
  }

  const mainFrameProps = {
    screenType: 'StubForUserResearch',
    contentComponentName: 'none',
    brandName: 'YouRails',
  }

  const imageBottomProps = {
    classAdded: 'Image_bottom',
    src: `${SERVERS_MAIN.remote}/images/city.svg`,
  }

  return (
    <div className='StubForUserResearch'>
      <MainFrame {...mainFrameProps}>
        {/* header */}
        <HeaderFrame {...headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <StubUserGoodbye />
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>
          <Image {...imageBottomProps} />
        </FooterFrame>
      </MainFrame>
    </div>
  )
}
