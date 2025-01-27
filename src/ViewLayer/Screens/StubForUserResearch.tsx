import React, { useEffect, ReactElement } from 'react'

import { withPropsYrl, ImageYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../DataLayer/index.handleEvents'
import { HandleEventType } from 'yourails_common'
import { FooterFrame } from '../Frames/FooterFrame/FooterFrame'
import { HeaderFrame, HeaderFramePropsType } from '../Frames/HeaderFrame/HeaderFrame'
import { StubUserGoodbye } from '../Components/StubUserGoodbye'
import { MainFrame } from '../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from 'yourails_common'
import { MainFramePropsType } from '../Frames/MainFrame/MainFrame'

interface StubForUserResearchPropsType {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
  handleEvents: HandleEventType
}

export const StubForUserResearchComponent: React.FunctionComponent<
  StubForUserResearchPropsType
> = ({ handleEvents, themeDafault }: StubForUserResearchPropsType): ReactElement => {
  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
  }, [])

  const headerFrameProps: HeaderFramePropsType = {
    contentComponentName: 'StubForUserResearch',
    isButtonSideMenuLeft: true,
    isLogoGroup: true,
    isButtonAddCourse: false,
    isButtonAuthUser: false,
    isSelectLanguage: true,
    isButtonThemeToggle: true,
    isSeachGroup: false,
    isButtonBack: false,
    isPageActionsGroup: false,
    isButtonsShare: false,
  }

  const mainFrameProps: MainFramePropsType = {
    screenType: 'StubForUserResearch',
  }

  const imageBottomProps = {
    classAdded: 'Image_bottom',
    src: `${SERVERS_MAIN.remote}/images/city.svg`,
    alt: 'research and development',
    handleEvents,
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
          <ImageYrl {...imageBottomProps} />
        </FooterFrame>
      </MainFrame>
    </div>
  )
}

const StubForUserResearch: React.FunctionComponent<StubForUserResearchPropsType> = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(StubForUserResearchComponent))

export { StubForUserResearch as default }
