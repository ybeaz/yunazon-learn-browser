import React, { useEffect, ReactElement } from 'react'

import { LogoGroup } from '../Components/LogoGroup'
import { FooterFrame } from '../Frames/FooterFrame'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { StubUserGoodbye } from '../Components/StubUserGoodbye'
import { MainFrame } from '../Frames/MainFrame'
import { BackgroundImage } from '../Frames/BackgroundImage'
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
    }

    const mainFrameProps = {
      screenType: 'StubForUserResearch',
      contentComponentName: 'none',
      brandName: 'YourRails',
    }

    const backgroundImageProps = {
      classAdded: 'BackgroundImage_SkillsExchangeSearch',
    }

    return (
      <div className='StubForUserResearch'>
        <MainFrame {...mainFrameProps}>
          {/* header */}
          <HeaderFrame {...headerFrameProps}>
            {null}
            <LogoGroup brandName={'YourRails'} />
          </HeaderFrame>
          {/* middle-left */}
          {null}
          {/* middle-main */}
          <StubUserGoodbye />
          {/* middle-right */}
          {null}
          {/* footer */}
          <FooterFrame>
            <BackgroundImage {...backgroundImageProps}>
              <div></div>
            </BackgroundImage>
          </FooterFrame>
        </MainFrame>
      </div>
    )
  }

/*

          <MainFrame {...mainFrameProps}>
            {null}
            {null}
            <StubUserGoodbye />
            {null}
            {null}
          </MainFrame>

*/
