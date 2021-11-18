import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  (props: StubForUserResearchArgs): JSX.Element => {
    const { themeDafault } = props
    useEffect(() => {
      handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
    }, [])

    const backgroundImageProps = {
      classAdded: 'BackgroundImage_SkillsExchangeSearch',
    }

    return (
      <BackgroundImage {...backgroundImageProps}>
        <div className='StubForUserResearch'>StubForUserResearch</div>
      </BackgroundImage>
    )
  }
