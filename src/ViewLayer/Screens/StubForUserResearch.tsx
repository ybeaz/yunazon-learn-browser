import React, { useEffect, ReactElement } from 'react'

import { Image } from '../Components/Image'
import { FooterFrame } from '../Frames/FooterFrame'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { StubUserGoodbye } from '../Components/StubUserGoodbye'
import { MainFrame } from '../Frames/MainFrame'
import { handleEvents } from '../../DataLayer/index.handleEvents'

interface StubForUserResearchArgs {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export const StubForUserResearch: React.FunctionComponent<StubForUserResearchArgs> =
  (props: StubForUserResearchArgs): ReactElement => {
    const { themeDafault } = props
    useEffect(() => {
      handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
    }, [])

    const headerFrameProps = {
      brandName: 'YourRails',
      contentComponentName: '',
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
      isInstallMobileAppGroup: false,
    }

    const mainFrameProps = {
      screenType: 'StubForUserResearch',
      contentComponentName: 'none',
      brandName: 'YourRails',
    }

    const imageBottomProps = {
      classAdded: 'Image_bottom',
      src: 'https://yourails.com/images/city.svg',
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
