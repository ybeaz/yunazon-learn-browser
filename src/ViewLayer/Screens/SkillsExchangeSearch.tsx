import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { CatalogSep } from '../Components/CatalogSep'
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
    const store = useSelector((store2: IRootStore) => store2)
    const { language: languageStore } = store

    const { themeDafault } = props
    useEffect(() => {
      handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
    }, [])

    const moduleCapture = 'Exchange your skills, save your time'
    const moduleDescription = 'Exchange your skills, save your time'
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`
    const mainFrameProps = {
      screenType: 'SkillsExchangeSearch',
      contentComponentName: 'CatalogSep',
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
          {null}
          {null}
          <CatalogSep />
          {null}
        </MainFrame>
      </div>
    )
  }
