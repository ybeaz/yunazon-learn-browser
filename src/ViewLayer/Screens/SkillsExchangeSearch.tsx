import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { BackgroundImage } from '../Frames/BackgroundImage'
import { Palette } from '../Components/Palette'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { SearchFormSep } from '../Components/SearchFormSep/SearchFormSep'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'

interface SkillsExchangeSearchProps {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export const SkillsExchangeSearch: React.FunctionComponent<SkillsExchangeSearchProps> =
  (props): JSX.Element => {
    getEffectedRequests(['GET_GLOBAL_VARS'])

    const store = useSelector((store2: IRootStore) => store2)
    const {
      language: languageStore,
      componentsState: { isShownSkillExchangeIntro, isShownPalette },
    } = store

    const { themeDafault } = props
    useEffect(() => {
      handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
      isShownSkillExchangeIntro &&
        handleEvents({}, { typeEvent: 'SEP_INTRO_IN' })
    }, [])

    const moduleCapture = 'Exchange your skills, save your time'
    const moduleDescription = 'Exchange your skills, save your time'
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`
    const mainFrameProps = {
      screenType: 'SkillsExchangeSearch',
      contentComponentName: 'SearchFormSep',
      brandName: 'YourRails',
    }

    const backgroundImageProps = {
      classAdded: 'BackgroundImage_SkillsExchangeSearch',
    }

    return (
      <BackgroundImage {...backgroundImageProps}>
        <div className='SkillsExchangeSearch'>
          <Helmet>
            <html lang={languageStore} />
            <meta charSet='utf-8' />
            <title>{moduleCapture}</title>
            <link rel='canonical' href={canonicalUrl} />
            <meta name='description' content={moduleDescription} />
          </Helmet>
          <MainFrame {...mainFrameProps}>
            {null}
            {null}
            <SearchFormSep />
            {isShownPalette && <Palette />}
          </MainFrame>
        </div>
      </BackgroundImage>
    )
  }
