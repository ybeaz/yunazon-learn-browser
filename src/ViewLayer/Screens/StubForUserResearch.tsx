import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

    const backgroundImageProps = {
      classAdded: 'BackgroundImage_SkillsExchangeSearch',
    }

    const mainFrameProps = {
      screenType: 'StubForUserResearch',
      contentComponentName: 'none',
      brandName: 'YourRails',
    }

    return (
      <BackgroundImage {...backgroundImageProps}>
        <div className='StubForUserResearch'>
          <MainFrame {...mainFrameProps}>
            {null}
            {null}
            <StubUserGoodbye />
            {null}
            {null}
          </MainFrame>
        </div>
      </BackgroundImage>
    )
  }
